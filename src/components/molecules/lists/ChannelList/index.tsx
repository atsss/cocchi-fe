import React from 'react'
import styles from './styles.module.sass'
import { Txt, SubTxt } from '../../../atoms/Txt'

interface Props {
  name: string
  icon: string
  className?: string
}

export const ChannelList: React.FC<Props> = ({ name, icon, className }) => (
  <div className={[styles.body, className].join(' ')}>
    <SubTxt className="u-mr8">{icon}</SubTxt>
    <Txt weight="bold">{name}</Txt>
  </div>
)
