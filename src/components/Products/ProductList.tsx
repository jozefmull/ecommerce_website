import ProductCard from './ProductCard'

import styles from '../../css/Products/ProductList.module.css'
import { Product } from '../../app/types/products'

type Props = {
    products: Product[] | undefined,
    layout: number
}

const ProductList = ({products, layout}: Props) => {
  
  return (
    <ul className={layout === 4 ? `${styles.productList} ${styles.layout4}` : `${styles.productList} ${styles.layout5}`}>
        {products?.map((product:Product,id:number) => (
            <ProductCard key={`${product.title}-${id}`} product={product}/>
        ))}
    </ul>
  )
}

export default ProductList