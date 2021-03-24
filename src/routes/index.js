import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Main from '../pages/App';
import Choose from '../pages/ChooseMovies';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
            <Route path="/" component={Choose} />
        </Switch>
    </BrowserRouter>
  );
}
