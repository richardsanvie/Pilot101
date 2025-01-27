import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {
  args: {
    color: 'black'
  }
}

Default.args = {
  children: 'Most Populars'
}
