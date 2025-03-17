import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now'
  }
}

export const withIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
    icon: <AddShoppingCart />,
    size: 'small'
  }
}

export const asLink: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
    size: 'large',
    as: 'a',
    href: '/link'
  }
}