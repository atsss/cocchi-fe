import React from 'react'
import { IoMdClose } from 'react-icons/io'
import styles from './styles.module.sass'
import { Button } from '../../../atoms/Button'
import { Header } from '../../../atoms/Header'
import { Link } from '../../../atoms/Link'
import { Txt } from '../../../atoms/Txt'

export const EditHeader: React.FC = () => (
  <Header>
    <div className={styles.block}>
      <div className={styles.block}>
        <Link to="/">
          <div className={[styles.icon, 'u-mr8'].join(' ')}>
            <IoMdClose />
          </div>
        </Link>
        <Txt weight="bold">プロフィール変更</Txt>
      </div>
      <Button onPress={() => console.log('press')}>
        <Txt>保存</Txt>
      </Button>
    </div>
  </Header>
)
