import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ChannelsIndex } from '../../components/pages/channels/Index'
import { CommunitiesIndex } from '../../components/pages/communities/Index'
import { UsersEdit } from '../../components/pages/users/Edit'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={CommunitiesIndex} />
    <Route exact path="/users/:id/edit" component={UsersEdit} />
    <Route exact path="/communities/:id/channels" component={ChannelsIndex} />
  </Switch>
)
