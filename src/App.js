import React from 'react';
import './App.css';
import _ from 'lodash'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {  PageRoute , RouteLinks } from './router/index'
function App() {
  return (
    <>
      <Router>
        <Switch>
          {_.map(RouteLinks, ({component, path}, key) => {
                return (
                  <Route
                    exact
                    path={path}
                    key={key}
                    render={route => (
                      <PageRoute
                        exact
                        component={component}
                        route={route}
                      />
                    )}
                  />
                )
              })
            }
        </Switch>
      </Router>
    </>
  );
}

export default App;
