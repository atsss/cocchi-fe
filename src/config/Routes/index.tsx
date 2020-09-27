import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ChannelsIndex } from '../../components/pages/channels/Index'
import { ChannelsShow } from '../../components/pages/channels/Show'
import { CommunitiesIndex } from '../../components/pages/communities/Index'
import { UsersEdit } from '../../components/pages/users/Edit'

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={CommunitiesIndex} />
    <Route exact path="/users/:id/edit" component={UsersEdit} />
    <Route exact path="/communities/:id/channels" component={ChannelsIndex} />
    <Route
      exact
      path="/communities/:communityId/channels/:channelId"
      component={ChannelsShow}
    />
  </Switch>
)
