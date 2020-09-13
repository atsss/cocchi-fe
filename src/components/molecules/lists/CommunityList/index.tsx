import React from 'react'
import styles from './styles.module.sass'
import { Community } from '../../../../interfaces'
import { Img } from '../../../atoms/Img'
import { Txt, SubTxt } from '../../../atoms/Txt'

interface Props extends Community {
  className?: string
}

export const CommunityList: React.FC<Props> = ({
  name,
  image,
  members,
  numOfFolders,
  className,
}) => (
  <div className={[styles.body, className].join(' ')}>
    <Img src={image} className="u-mr8" />
    <div>
      <Txt weight="bold">{name}</Txt>
      <SubTxt size="s">{members}</SubTxt>
      <SubTxt size="s">{`${numOfFolders} folders`}</SubTxt>
    </div>
  </div>
)
