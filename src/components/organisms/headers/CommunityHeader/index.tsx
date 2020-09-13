import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import styles from './styles.module.sass'
import { User } from '../../../../interfaces'
import { Header } from '../../../atoms/Header'
import { Img } from '../../../atoms/Img'
import { Link } from '../../../atoms/Link'
import { Txt } from '../../../atoms/Txt'

interface Props {
  user: User
}

export const CommunityHeader: React.FC<Props> = ({ user }) => (
  <Header>
    <div className={styles.block}>
      <div className={styles.block}>
        <Img src={user.image} size="s" border="radius" className="u-mr8" />
        <Txt weight="bold">{user.name}</Txt>
      </div>
      <div className={styles.icon}>
        <Link to={`/users/${user.id}/edit`}>
          <BsThreeDots />
        </Link>
      </div>
    </div>
  </Header>
)
