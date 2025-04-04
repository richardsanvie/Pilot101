import GameCard, { GameCardProps } from '../GameCard'
import Slider, { SliderSettings } from '../Slider'

import * as S from './styles'

type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="next games"/>,
  prevArrow: <ArrowLeft aria-label="previous games"/>
}

const settings: SliderSettings = {}

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={ index } { ...item } />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
