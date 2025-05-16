import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  parameters: {
    layout: 'fullscreen'
  },
   args: { ...item }
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{maxWidth: '104rem'}}>
      <Highlight {...args}/>
    </div>
  )
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{maxWidth: '104rem'}}>
      <Highlight {...args}/>
    </div>
  )
}

WithFloatImage.args = {
  floatImage: 'https://picsum.photos/580/1042'
}
