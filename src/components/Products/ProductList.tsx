import ProductCard from './ProductCard'

import styles from '../../css/Products/ProductList.module.css'
import { Product } from '../../app/types/products'

type Props = {
    products: Product[] | undefined,
    layout: number,
    anim: boolean
}

const ProductList = ({products, layout, anim}: Props) => {
  
  return (
    <ul className={layout === 4 ? `${styles.productList} ${styles.layout4}` : `${styles.productList} ${styles.layout5}`}>
        {products?.map((product:Product,idx:number) => (
            <ProductCard key={`${product.title}-${idx}`} product={product} idx={idx} anim={anim}/>
        ))}
    </ul>
  )
}

export default ProductList