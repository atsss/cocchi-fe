import React from 'react'
import { CommunitiesIndexTemplate as Template } from '../../../templates/communities/Index'
import { user, communities } from '../../../../config/data'

export const CommunitiesIndex = () => (
  <Template user={user} communities={communities} />
)
