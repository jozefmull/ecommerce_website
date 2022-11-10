import {Link} from 'react-router-dom'

import { Product } from "../../app/types/products"

import CartIcon from '../../assets/images/cart_white.svg'
import styles from '../../css/Products/ProductList.module.css'

type Props = {
    product: Product
}

const ProductCard = ({product}: Props) => {

  const {thumbnail, title, price, id, discountPercentage} = product

  return (
    <li className={styles.productCard}>
      {discountPercentage ? <span className={styles.discount}>sale</span> : null}
      <Link to={`/shop/product/${id}`}/>
      <div className={styles.imgWrap}>
        <img src={thumbnail} alt='product' className={styles.productImage} width={'auto'} loading="lazy"/>
      </div>
      <div className={styles.productCardInfo}>
        <div className={styles.cardCartIcon}>
          <img src={CartIcon} alt='card-cart-icon'/>
        </div>
        <h3>{title}</h3>
        <span>$ {price}</span>
      </div>
    </li>
  )
}

export default ProductCard