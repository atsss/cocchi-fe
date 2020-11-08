import React from 'react'
import styles from './styles.module.sass'

interface Props {
  lat: number
  lng: number
  color?: string
  name: string
}

export const Marker: React.FC<Props> = ({ color = 'blue', name }) => (
  <div>
    <div
      className={[styles.pin, styles.bounce].join(' ')}
      style={{ backgroundColor: color, cursor: 'pointer' }}
      title={name}
    />
    <div className="pulse" />
  </div>
)
