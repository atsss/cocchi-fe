import React from 'react'
import styles from './styles.module.sass'

interface Props {
  children: React.ReactNode
}

export const Section: React.FC<Props> = ({ children }) => (
  <section className={styles.container}>
    <div className={styles.content}>{children}</div>
  </section>
)
