import React from 'react'
import { Place } from '../../../../interfaces'
import { EditHeader } from '../../../organisms/headers/EditHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  place: Place[]
}

export const PlacesNewTemplate: React.FC<Props> = () => (
  <>
    <EditHeader backPath="/">新規ピン</EditHeader>
    <Nav />
  </>
)
