import React from 'react'
import {Route} from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'

export const PageRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
        return  (
          <DefaultLayout>
              <Component {...props} />
          </DefaultLayout>
        )
      }} 
    />
  );
}
