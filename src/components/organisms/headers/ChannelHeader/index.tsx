import React from 'react'
/* import { BsThreeDots } from 'react-icons/bs' */
import styles from './styles.module.sass'
import { Community } from '../../../../interfaces'
import { Header } from '../../../atoms/Header'
import { Img } from '../../../atoms/Img'
/* import { Link } from '../../../atoms/Link' */
import { Txt } from '../../../atoms/Txt'

interface Props {
  community: Community
}

export const ChannelHeader: React.FC<Props> = ({ community }) => (
  <Header>
    <div className={styles.block}>
      <div className={styles.block}>
        <Img src={community.image} size="s" className="u-mr8" />
        <Txt weight="bold">{community.name}</Txt>
      </div>
      {/* <div className={styles.icon}> */}
      {/*   <Link to={`/communitys/${community.id}/edit`}> */}
      {/*     <BsThreeDots /> */}
      {/*   </Link> */}
      {/* </div> */}
    </div>
  </Header>
)
