import React from 'react'
import styles from './styles.module.sass'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Section: React.FC<Props> = ({ children, className }) => (
  <section className={[styles.container, className].join(' ')}>
    <div className={styles.content}>{children}</div>
  </section>
)
