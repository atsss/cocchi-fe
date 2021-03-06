import React from 'react'
import { UsersEditTemplate as Template } from '../../../templates/users/Edit'
import { user } from '../../../../config/data'

export const UsersEdit: React.FC = () => <Template user={user} />
