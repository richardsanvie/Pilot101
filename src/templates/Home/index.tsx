import { Container } from '@/components/Container'
import Menu from '@/components/Menu'
import Heading from '@/components/Heading'
import Footer from '@/components/Footer'
import GameCardSlider from '@/components/GameCardSlider'
import BannerSlider from '@/components/BannerSlider'

import { BannerProps } from '@/components/Banner'
import { GameCardProps } from '@/components/GameCard'
import Highlight, { HighlightProps } from '@/components/Highlight'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
}

const Home = ({
  banners,
  mostPopularHighlight,
  mostPopularGames,

}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home