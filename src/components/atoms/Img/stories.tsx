import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Img, Props } from '.'

export default {
  title: 'Atoms/Img',
  component: Img,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['s', 'm', 'l'],
      },
    },
    border: {
      control: {
        type: 'select',
        options: ['none', 'radius'],
      },
    },
  },
} as Meta

const Template: Story<Props> = ({ src, size, border }) => (
  <Img src={src} size={size} border={border} />
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://cocchi-sample.s3-us-west-2.amazonaws.com/community3.jpg',
}
