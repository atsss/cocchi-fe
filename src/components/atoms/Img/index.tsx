import React from 'react'
import styles from './styles.module.sass'

interface Props {
  src: string
  size?: string
  alt?: string
  border?: string
  className?: string
}

export const Img: React.FC<Props> = ({
  src,
  size = 'm',
  alt = '',
  border = 'none',
  className,
}) => (
  <img
    src={src}
    alt={alt}
    className={[styles.img, styles[size], styles[border], className].join(' ')}
  />
)
