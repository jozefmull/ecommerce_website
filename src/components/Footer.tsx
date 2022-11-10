import {useMemo} from 'react'
import {NavLink} from 'react-router-dom' 

import {routes} from '../assets/constants'

import Container from './Container'

import Logo from '../assets/images/logo.svg'
import styles from '../css/Footer.module.css'

const Footer = () => {
    const NAV_LINKS = useMemo(() => 
    routes.map((route,id) => (
      <NavLink to={route.path} key={`${route.title}-${id}`}>{route.title}</NavLink>
    ))
  , [])

  return (
    <footer className={styles.footer}>
      <Container>
            <div className={styles.left}>
              <div>
                  <img src={Logo} alt="logo" />
                  <h3>Shop Template</h3>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem neque magnam cumque mollitia totam sequi quas consectetur dolore alias suscipit modi maxime iure quasi esse, dolorem ullam ad consequuntur veritatis.</p>
            </div>
            <div className={styles.footerNavigation}>
                <h3>Navigation</h3>
                {NAV_LINKS}
            </div>
            <div className={styles.footerAddress}>
                <h3>Address</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae?</p>
            </div>
      </Container>
    </footer>
  )
}

export default Footer