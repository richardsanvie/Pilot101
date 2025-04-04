
 

 import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider from '.'
import { GameCardProps } from '../GameCard'
 
 const items = [
   {
     title: 'Population Zero',
     developer: 'Rockstar Games',
     img: 'https://source.unsplash.com/user/willianjusten/300x140',
     price: 'R$ 235,00',
     promotionalPrice: 'R$ 215,00'
   },
   {
     title: 'Population Zero',
     developer: 'Rockstar Games',
     img: 'https://source.unsplash.com/user/willianjusten/300x141',
     price: 'R$ 235,00',
     promotionalPrice: 'R$ 215,00'
   },
   {
     title: 'Population Zero',
     developer: 'Rockstar Games',
     img: 'https://source.unsplash.com/user/willianjusten/300x142',
     price: 'R$ 235,00',
     promotionalPrice: 'R$ 215,00'
   },
   {
     title: 'Population Zero',
     developer: 'Rockstar Games',
     img: 'https://source.unsplash.com/user/willianjusten/300x143',
     price: 'R$ 235,00',
     promotionalPrice: 'R$ 215,00'
   },
   {
     title: 'Population Zero',
     developer: 'Rockstar Games',
     img: 'https://source.unsplash.com/user/willianjusten/300x144',
     price: 'R$ 235,00',
     promotionalPrice: 'R$ 215,00'
   },
   {
     title: 'Population Zero',
     developer: 'Rockstar Games',
     img: 'https://source.unsplash.com/user/willianjusten/300x145',
     price: 'R$ 235,00',
     promotionalPrice: 'R$ 215,00'
   }
 ]
 
 export default {
   title: 'GameCardSlider',
   component: GameCardSlider,
   args: { items },
   parameters: {
     layout: 'fullscreen',
     backgrounds: {
       default: 'dark'
     }
   }
 } as Meta
 
 export const Default:  StoryObj<GameCardProps[]> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
     <GameCardSlider items={args} {...args} />
   </div>
  )
}
