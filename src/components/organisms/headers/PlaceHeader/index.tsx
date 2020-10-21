import React from 'react'
/* import { BsThreeDots } from 'react-icons/bs' */
import styles from './styles.module.sass'
import { Place } from '../../../../interfaces'
import { Header } from '../../../atoms/Header'
/* import { Link } from '../../../atoms/Link' */
import { Txt } from '../../../atoms/Txt'

interface Props {
  place: Place
}

export const PlaceHeader: React.FC<Props> = ({ place }) => (
  <Header>
    <div className={[styles.block, styles.height].join(' ')}>
      <div>
        <div className={styles.block}>
          <Txt weight="bold">{place.name}</Txt>
        </div>
        <Txt size="s">{place.visit}</Txt>
      </div>
      {/* <div className={styles.icon}> */}
      {/*   <Link to={`/channels/${Channel.id}/edit`}> */}
      {/*     <BsThreeDots /> */}
      {/*   </Link> */}
      {/* </div> */}
    </div>
  </Header>
)
