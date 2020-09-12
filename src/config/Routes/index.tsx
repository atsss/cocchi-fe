import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CommunitiesIndex } from '../../components/pages/communities/Index'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={CommunitiesIndex} />
  </Switch>
)
