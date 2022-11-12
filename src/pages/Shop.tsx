import {useState, useEffect} from 'react'
import { useGetAllProductsQuery } from '../app/services/productsApi'

import Container from '../components/Container'
import ProductLoader from '../components/Loading/HomePage/ProductLoader'
import ProductList from '../components/Products/ProductList'
import ShopLoadMore from '../components/Products/ShopLoadMore'

import { Product } from '../app/types/products'
import styles from '../css/Shop.module.css'

type Props = {}

const Shop = (props: Props) => {
  const [products, setproducts] = useState<Product[]>([])
  const [total, settotal] = useState<number>(0)
  const [skip, setskip] = useState<number>(16)

  const {data, isFetching, error} = useGetAllProductsQuery()

  useEffect(() => {
    if (data?.products) {
      setproducts(data?.products)
      settotal(data?.total)
    }    
  }, [data])

  return (
    <Container>
      <section className={styles.shopWrap}>
        <h1>Shop</h1>
        {isFetching ? <ProductLoader/> : error ? 'error' : (
          <>
            <ProductList products={products} layout={4} anim={false}/>
            <ShopLoadMore skip={skip} setskip={setskip} total={total} setproducts={setproducts}/>
          </>
        )}
      </section>
    </Container>
  )
}

export default Shop