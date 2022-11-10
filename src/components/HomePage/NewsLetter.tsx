import Container from '../../components/Container'

import styles from '../../css/HomePage/NewsLetter.module.css'

type Props = {}

const NewsLetter = (props: Props) => {
  return (
    <section className={styles.newsLetter}>
      <Container>
        <div className={styles.left}>
          <h2>Newsletter</h2>
          <p>Want to keep in touch with our latest updates? <br/> Subscribe to our newsletter</p>
        </div>
        <div className={styles.right}>
          <input type="text" name="newsletter" id="newsletter" placeholder='ENTER EMAIL'/>
          <button>SEND</button>
        </div>
      </Container>
    </section>
  )
}

export default NewsLetter