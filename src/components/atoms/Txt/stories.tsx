import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Txt, SubTxt, Props } from '.'

export default {
  title: 'Atoms/Txt',
  component: Txt,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['s', 'm'],
      },
    },
    weight: {
      control: {
        type: 'select',
        options: ['normal', 'bold'],
      },
    },
  },
} as Meta

const DefaultTemplate: Story<Props> = ({ size, weight, children }) => (
  <Txt size={size} weight={weight}>
    {children}
  </Txt>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
  size: 'm',
  weight: 'normal',
  children: <p>Hello</p>,
}

const SubTemplate: Story<Props> = ({ size, weight, children }) => (
  <SubTxt size={size} weight={weight}>
    {children}
  </SubTxt>
)

export const Sub = SubTemplate.bind({})
Sub.args = {
  size: 'm',
  weight: 'normal',
  children: <p>Hello</p>,
}
