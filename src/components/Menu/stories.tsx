import { Meta, StoryObj } from '@storybook/react'
import Menu, {MenuProps} from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: StoryObj<MenuProps> = {
  render: (args) => <Menu {...args} />
}

Default.parameters = { 
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
