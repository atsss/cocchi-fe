import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ChannelsIndex } from '../../components/pages/channels/Index'
import { ChannelsShow } from '../../components/pages/channels/Show'
import { ChannelsEdit } from '../../components/pages/channels/Edit'
import { CommunitiesIndex } from '../../components/pages/communities/Index'
import { UsersEdit } from '../../components/pages/users/Edit'
import { PlacesIndex } from '../../components/pages/places/Index'

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={CommunitiesIndex} />
    <Route exact path="/users/:id/edit" component={UsersEdit} />
    <Route exact path="/communities/:id/channels" component={ChannelsIndex} />
    <Route exact path="/channels/:id" component={ChannelsShow} />
    <Route exact path="/channels/:id/edit" component={ChannelsEdit} />
    <Route exact path="/places/" component={PlacesIndex} />
  </Switch>
)
