import React from 'react'
import styles from './styles.module.sass'

export interface Props {
  children: React.ReactNode
}

export const Header: React.FC<Props> = ({ children }) => (
  <header className={styles.container}>
    <div className={styles.content}>{children}</div>
  </header>
)
