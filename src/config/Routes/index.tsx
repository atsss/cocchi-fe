import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CommunitiesIndex } from '../../components/pages/communities/Index'
import { UsersEdit } from '../../components/pages/users/Edit'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={CommunitiesIndex} />
    <Route exact path="/users/:id/edit" component={UsersEdit} />
  </Switch>
)
