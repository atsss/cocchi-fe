import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Header, Props } from '.'

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta

const Template: Story<Props> = ({ children }) => <Header>{children}</Header>

export const Default = Template.bind({})
Default.args = {
  children: <p>Hello</p>,
}
