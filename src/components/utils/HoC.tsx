/* eslint @typescript-eslint/no-explicit-any: 0 */
/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react'

export const containerPresenter = (
  Container: React.FC,
  Presenter: React.FC
) => {
  return (props: any) => (
    <Container
      presenter={(presenterProps: any) => <Presenter {...presenterProps} />}
      {...props}
    />
  )
}
