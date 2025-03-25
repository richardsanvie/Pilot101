import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: 'https://picsum.photos/1042/580',
    FloatImage: 'https://picsum.photos/580/1042',
    buttonLabel:'Buy now',
    buttonLink: '/rdr2'
  }
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
