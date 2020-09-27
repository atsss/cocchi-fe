import React from 'react'
/* import { BsThreeDots } from 'react-icons/bs' */
import styles from './styles.module.sass'
import { Channel } from '../../../../interfaces'
import { Header } from '../../../atoms/Header'
/* import { Link } from '../../../atoms/Link' */
import { Txt, SubTxt } from '../../../atoms/Txt'

interface Props {
  channel: Channel
}

export const MapHeader: React.FC<Props> = ({ channel }) => (
  <Header>
    <div className={[styles.block, styles.height].join(' ')}>
      <div>
        <div className={styles.block}>
          <SubTxt>{channel.icon}</SubTxt>
          <Txt weight="bold">{channel.name}</Txt>
        </div>
        <Txt size="s">{`${channel.numOfPlaces} pins`}</Txt>
      </div>
      {/* <div className={styles.icon}> */}
      {/*   <Link to={`/channels/${Channel.id}/edit`}> */}
      {/*     <BsThreeDots /> */}
      {/*   </Link> */}
      {/* </div> */}
    </div>
  </Header>
)
