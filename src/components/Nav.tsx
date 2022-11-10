import {useMemo} from 'react'
import {NavLink} from 'react-router-dom' 

import {routes} from '../assets/constants'

import Logo from '../assets/images/logo.svg'
import Cart from '../assets/images/cart.svg'
import styles from '../css/Nav.module.css'

type Props = {}


const Nav = (props: Props) => {
  
  const NAV_LINKS = useMemo(() => 
    routes.map((route,id) => (
      <NavLink to={route.path} key={`${route.title}-${id}`}>{route.title}</NavLink>
    ))
  , [])

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationWrap}>
        <div className={styles.navLinks}>
          <NavLink to='/'><img src={Logo} alt='logo' /></NavLink>
          {NAV_LINKS}
        </div>
        <div>
          <img src={Cart} alt='logo' />
        </div>
      </div>
    </nav>
  )
}

export default Nav