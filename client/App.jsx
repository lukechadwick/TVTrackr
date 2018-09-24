import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';

// const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <div className="ui container">
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
  </div>
);

export default App;
