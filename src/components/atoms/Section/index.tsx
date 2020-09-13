import React from 'react'
import style from './styles.module.sass'

interface Props {
  children: React.ReactNode
}

export const Section: React.FC<Props> = ({ children }) => (
  <section className={style.container}>
    <div className={style.content}>{children}</div>
  </section>
)
