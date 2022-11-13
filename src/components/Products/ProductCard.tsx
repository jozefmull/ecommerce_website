import { useAppDispatch } from '../../app/hooks'
import { addToCart } from '../../app/features/cart'

import {Link} from 'react-router-dom'

import StarRating from './StarRating'
import SaleBadge from './SaleBadge'

import { Product } from "../../app/types/products"

import CartIcon from '../../assets/images/cart_white.svg'
import styles from '../../css/Products/ProductList.module.css'

type Props = {
    product: Product,
    idx: number,
    anim: boolean
}

const ProductCard = ({product, idx, anim}: Props) => {
  const dispatch = useAppDispatch()

  const {thumbnail, title, price, id, discountPercentage, rating} = product

  return (
    <li className={styles.productCard} style={anim ? {animationDelay: idx + '00ms'} : undefined}>
      {discountPercentage ? <SaleBadge/> : null}
      <Link to={`/shop/product/${id}`}/>
      <div className={styles.imgWrap}>
        <img src={thumbnail} alt='product' className={styles.productImage} width={'auto'} loading="lazy"/>
      </div>
      <div className={styles.productCardInfo}>
        <div className={styles.cardCartIcon} onClick={() => dispatch(addToCart(product))}>
          <img src={CartIcon} alt='card-cart-icon'/>
        </div>
        <h3>{title}</h3>
        <StarRating rating={rating} size={'sm'}/>
        <span>$ {price}</span>
      </div>
    </li>
  )
}

export default ProductCard