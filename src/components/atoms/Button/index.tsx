import React from 'react'
import { Button as DefaultButton } from '@adobe/react-spectrum'

interface Props {
  onPress: () => void
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<Props> = ({ onPress, children, className }) => (
  <div className={className}>
    <DefaultButton onPress={onPress} variant="primary" isQuiet>
      {children}
    </DefaultButton>
  </div>
)
