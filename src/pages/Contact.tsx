import Container from '../components/Container' 
import ContactForm from '../components/ContactForm'

import {MdEmail, MdPhone, MdLocationOn} from 'react-icons/md'

import styles from '../css/Contact.module.css'

const Contact = () => {
  return (
      <section className={styles.contactWrap}>
        <Container>
          <h1>Contact</h1>
          <section className={styles.layoutWrap}>
            <section className={styles.left}>
              <h2>Contact information:</h2>
              <address>
                <h3><MdLocationOn/> Address:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.</p>
                <div className={styles.infoWrap}>
                  <h3><MdEmail/> Email:</h3>
                  <a href="mailto:myemail@shoptemplate.com">myemail@shoptemplate.com</a>
                </div>
                <div className={styles.infoWrap}>
                  <h3><MdPhone/> Phone:</h3>
                  <a href="tel:0123 456 789">0123 456 789</a>
                </div>
              </address>
            </section>  
            <section className={styles.right}>
              <h2>Contact us</h2>
              <ContactForm/>  
            </section>  
          </section>
        </Container>
        {/* <div className={styles.contactMap}></div> */}
      </section> 
  )
}

export default Contact