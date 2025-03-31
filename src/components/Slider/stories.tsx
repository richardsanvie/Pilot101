import { Meta, StoryObj } from '@storybook/react'
import { Settings } from 'react-slick'
import Slider from '.'
import styled from 'styled-components'



export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
   background: gray;
   width: 30rem;
   padding: 10rem 0;
   border: 0.1rem solid red;
   color: white;
   text-align: center;
 `

export const Default: StoryObj = {
  render: () => (
    <Slider settings={settings}>
     <Slide>1</Slide>
     <Slide>2</Slide>
     <Slide>3</Slide>
   </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true, 
  infinite: false,
  slidesToShow: 1,
}

export const vertical: StoryObj = {
  render: () => (
    <Slider settings={verticalSettings}>
     <Slide>1</Slide>
     <Slide>2</Slide>
     <Slide>3</Slide>
   </Slider>
  )
}
