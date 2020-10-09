import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Todo = lazy(() => import('./pages/Todo'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/todo' component={Todo} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
