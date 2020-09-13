import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styles from './styles.module.sass'

interface Props {
  to: string
  children: React.ReactNode
  className?: string
}

export const Link: React.FC<Props> = ({ to, children, className }) => (
  <RouterLink to={to} className={[styles.link, className].join(' ')}>
    {children}
  </RouterLink>
)
