import {useState} from 'react'
import { NavLink } from 'react-router-dom'

import {routes} from '../assets/constants'
import styles from '../css/Nav.module.css'

const MobileNav = () => {
    const [open, setopen] = useState(false)

    const NAV_LINKS = 
    routes.map((route,id) => (
      <NavLink to={route.path} key={`${route.title}-${id}`} onClick={() => setopen(!open)}>{route.title}</NavLink>
    ))

  return (
    <nav className={styles.mobileNav}>
        {open ? (
            <div className={styles.navLinksWrap}>
                {NAV_LINKS}
            </div>
        ) : null}
       <button onClick={() => setopen(!open)}>{open ? '✖' : '☰'}</button> 
    </nav>
  )
}

export default MobileNav