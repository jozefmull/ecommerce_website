import {useMemo, useState, useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { handleOverlay } from '../app/features/cart'

import {NavLink} from 'react-router-dom' 

import MiniCart from './Cart/MiniCart'
import MobileNav from './MobileNav'

import {routes} from '../assets/constants'
import Logo from '../assets/images/logo.svg'
import Cart from '../assets/images/cart.svg'
import styles from '../css/Nav.module.css'

const Nav = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)
  const {cart:myCart, overlay} = cart

  const [minicartopen, setminicartopen] = useState<boolean>(false)
  let totalItems: number = myCart.map(item => item.qty).reduce((acc, curr) => acc += curr, 0)

  let totalPrice = myCart.length > 0 ? myCart.map(
    item =>  item.discountPercentage ?
      (item.price - item.price * (item.discountPercentage / 100)) * item.qty
    : item.qty * item.price)
    .reduce((acc,curr) => acc += curr, 0)
    .toFixed(2) : 0

  const NAV_LINKS = useMemo(() => 
    routes.map((route,id) => (
      <NavLink to={route.path} key={`${route.title}-${id}`}>{route.title}</NavLink>
    ))
  , [])

  useEffect(() => {
    if (!overlay) {
      setminicartopen(false)
    }
  }, [overlay])
  

  const handleOpenMiniCart = () => {
    setminicartopen(!minicartopen)
    dispatch(handleOverlay(!overlay))
  }

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.navigationWrap}>
          <div className={styles.navLinks}>
            <NavLink to='/'><img src={Logo} alt='logo' /></NavLink>
            {NAV_LINKS}
          </div>
          <div className={styles.cartWrap}>
            <div onClick={() => handleOpenMiniCart()}>
              {totalItems > 0 ? (
                <span className={styles.badge}>{totalItems}</span>
              ) : null}
              <img src={Cart} alt='logo' />
            </div>
            {minicartopen ? (<MiniCart handleOpenMiniCart={handleOpenMiniCart} totalItems={totalItems} totalPrice={totalPrice}/>) : null}
          </div>
        </div>
      </nav>
      <MobileNav/>
    </>
  )
}

export default Nav