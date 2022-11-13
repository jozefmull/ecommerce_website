import { useAppSelector, useAppDispatch } from '../app/hooks'
import { incrementQty, decrementQty } from '../app/features/cart'
import { Link } from 'react-router-dom'

import Container from '../components/Container'
import StarRating from '../components/Products/StarRating'

import styles from '../css/Cart.module.css'

const Cart = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)
  const {cart:myCart} = cart

  let totalItems: number = myCart.length > 0 ? myCart.map(item => item.qty).reduce((acc, curr) => acc += curr, 0) : 0

  let totalPrice = myCart.length > 0 ? myCart.map(
    item =>  item.discountPercentage ?
      (item.price - item.price * (item.discountPercentage / 100)) * item.qty
    : item.qty * item.price)
    .reduce((acc,curr) => acc += curr, 0)
    .toFixed(2) : 0
  
  let tax =  myCart.length > 0 ? (Number(totalPrice) * 0.21).toFixed(2) : 0

  return (
    <Container>
      <section className={styles.cartWrap}>
        <h1>Cart</h1>
        {myCart.length > 0 ? (
          <>
            <div className={styles.cartItemsWrap}>
              <ul>
              {myCart.map((item, id) => (
                  <li key={`cart-item-${id}`}>
                    <div className={styles.left}>
                      <h2>{item.title}</h2>
                      <h3>{item.brand}</h3>
                      <StarRating rating={item.rating} size={'lg'}/>
                      <div className={styles.price}>
                        <div>
                            <h4>Price:</h4>
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
                      <img src={item.thumbnail} alt="cart-thumbnail"  />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.cartSummary}>
              <h3><span>Tax 21%: </span>$ {tax}</h3>
              <h3><span>Quantity: </span>{totalItems}</h3>
              <h3><span>Total: </span>$ {totalPrice}</h3>
              <Link to='/checkout'>ORDER</Link>
            </div>
          </>
        ) : 
        (
          <div className={styles.cartItemsWrap}>
            <h2>Cart is empty !</h2>
            <p>Please go to our shop and add somethnig to your cart.</p>
            <Link to='/shop'>SHOP</Link>
          </div>
        )}
        
        
      </section>
    </Container>
  )
}

export default Cart