import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />

        <Route path="/movie/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
