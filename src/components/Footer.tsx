import {useMemo} from 'react'
import {NavLink} from 'react-router-dom' 

import {routes} from '../assets/constants'

import styles from '../css/Footer.module.css'

type Props = {}

const Footer = (props: Props) => {
    const NAV_LINKS = useMemo(() => 
    routes.map((route,id) => (
      <NavLink to={route.path} key={`${route.title}-${id}`}>{route.title}</NavLink>
    ))
  , [])

  return (
    <footer className={styles.footer}>
        <div className={styles.footerWrap}>
            <div>
                Logo
            </div>
            <div className={styles.footerNavigation}>
                <h3>Navigation</h3>
                {NAV_LINKS}
            </div>
            <div className={styles.footerAdress}>
                <h3>Address</h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer