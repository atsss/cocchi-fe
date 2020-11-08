import React from 'react'

interface Props {
  withNav?: boolean
  children: React.ReactNode
}

export const Main: React.FC<Props> = ({ withNav = false, children }) => (
  <main style={{ marginBottom: withNav ? '100px' : '0' }}>{children}</main>
)
