import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, Props } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'https://react-spectrum.adobe.com/react-spectrum/Button.html',
      },
    },
  },
} as Meta

const Template: Story<Props> = ({ onPress, className, children }) => (
  <Button onPress={onPress} className={className}>
    {children}
  </Button>
)

export const Default = Template.bind({})
Default.args = {
  onPress: () => console.log('hi'),
  children: <p>Hello</p>,
}
