import React, { Dispatch, SetStateAction } from 'react'
import { TextField as DefaultTextField } from '@adobe/react-spectrum'
import styles from './styles.module.sass'

interface Props {
  onChange: Dispatch<SetStateAction<string>>
  value: string
  label: string
  placeholder?: string
  className?: string
}

export const TextField: React.FC<Props> = ({
  onChange,
  value,
  label,
  placeholder = '',
  className,
}) => (
  <div className={[styles.input, className].join(' ')}>
    <DefaultTextField
      label={label}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      width="100%"
      isQuiet
    />
  </div>
)
