import React from 'react'
import { BiMapPin } from 'react-icons/bi'
import { AiOutlineCamera } from 'react-icons/ai'
import styles from './styles.module.sass'
import { Txt } from '../../atoms/Txt'

export const Nav: React.FC = () => (
  <nav className={styles.container}>
    <div className={styles.content}>
      <div className={styles.icon}>
        <BiMapPin />
        <Txt size="s">マップ</Txt>
      </div>
      <div className={styles.icon}>
        <AiOutlineCamera />
        <Txt size="s">登録</Txt>
      </div>
    </div>
  </nav>
)
