import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { incrementQty, decrementQty } from '../../app/features/cart'
import { Link } from 'react-router-dom'

import StarRating from '../Products/StarRating'

import styles from '../../css/Nav.module.css'

type Props = {
  handleOpenMiniCart: React.Dispatch<React.SetStateAction<boolean>>,
  totalItems: number
  totalPrice: string | number
}

const MiniCart = ({handleOpenMiniCart, totalItems, totalPrice}: Props) => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)
  const {cart:myCart} = cart


  return (
    <div className={styles.miniCart}>
      <h3>Your cart: <span>{totalItems} {totalItems > 1 ? 'Items' : 'Item'}</span></h3>
      {myCart.length > 0 ? (
        <>
          <ul>
            {myCart.map((item, id) => (
              <li key={`mini-cart-item-${id}`}>
                <div className={styles.left}>
                  <h4>{item.title}</h4>
                  <h5>{item.brand}</h5>
                  <StarRating rating={item.rating} size={'sm'}/>
                  <div className={styles.price}>
                    <div>
                        <h6>Price:</h6>
                        <span className={item?.discountPercentage ? styles.discount : ''}>$ {item?.price}</span>
                        {item?.discountPercentage ? (<em>-{item?.discountPercentage}%</em>) : null}
                    </div>
                    {item?.discountPercentage && 
                        <span className={styles.discountedPrice}>
                            $ {(item?.price - (item?.price * (item?.discountPercentage / 100))).toFixed(2)}
                        </span>
                    }
                  </div>
                </div>
                <div className={styles.right}>
                  <span className={styles.sale}>SALE</span>
                  <div className={styles.qtyWrap}>
                    <span onClick={() => dispatch(incrementQty(item))}>&#43;</span>
                    <em>{item.qty}</em>
                    <span onClick={() => dispatch(decrementQty(item))}>&#8722;</span>
                  </div>
                  <img src={item.thumbnail} alt="cart-thumbnail"  width={100} height={'auto'}/>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <h3>Total: </h3>
            <h4>$ {totalPrice}</h4>
          </div>
          <div className={styles.btnWrap}>
            <Link to='/cart' onClick={() => handleOpenMiniCart(false)}>CART</Link>
            <Link to='/checkout' onClick={() => handleOpenMiniCart(false)}>CHECKOUT</Link>
          </div>
        </>
      ) : <p>Cart empty. Please add something to your cart</p>}
    </div>
  )
}

export default MiniCart