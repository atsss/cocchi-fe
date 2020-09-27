import React from 'react'
/* import { BsThreeDots } from 'react-icons/bs' */
import styles from './styles.module.sass'
import { Community } from '../../../../interfaces'
import { Header } from '../../../atoms/Header'
/* import { Link } from '../../../atoms/Link' */
import { Txt, SubTxt } from '../../../atoms/Txt'

interface Props {
  community: Community
}

export const MapHeader: React.FC<Props> = ({ community }) => (
  <Header>
    <div className={[styles.block, styles.height].join(' ')}>
      <div>
        <div className={styles.block}>
          <SubTxt>sushi</SubTxt>
          <Txt weight="bold">{community.name}</Txt>
        </div>
        <Txt size="s">{`${community.numOfFolders} pins`}</Txt>
      </div>
      {/* <div className={styles.icon}> */}
      {/*   <Link to={`/communitys/${community.id}/edit`}> */}
      {/*     <BsThreeDots /> */}
      {/*   </Link> */}
      {/* </div> */}
    </div>
  </Header>
)
