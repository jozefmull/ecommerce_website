import Hero from '../components/HomePage/Hero'
import Categories from '../components/HomePage/Categories'
import Favourites from '../components/HomePage/Favourites'
import BlogSlider from '../components/HomePage/BlogSlider'
import NewsLetter from '../components/HomePage/NewsLetter'
import Container from '../components/Container'

type Props = {}

const Home = (props: Props) => {
  return (
    <section style={{overflow: 'hidden'}}>
      <Hero />
      <Container>
        <Categories />
        <Favourites />
      </Container>
      <NewsLetter />
      <Container>
        <BlogSlider />
      </Container>
    </section>
  )
}

export default Home