import {useParams} from 'react-router-dom'
import {useGetProductByCategoryQuery} from '../app/services/productsApi'

import Container from '../components/Container'
import ProductList from '../components/Products/ProductList'
import ProductLoader from '../components/Loading/HomePage/ProductLoader'

import styles from '../css/Category.module.css'

type Props = {}

const Category = (props: Props) => {
    const {category} = useParams()
    const {data, isFetching, error} = useGetProductByCategoryQuery({ category })

    console.log(data);

  return (
    <Container>
      <section className={styles.categoryWrap}>
          <h1>{category} ({data?.total !== undefined ? data?.total : 0})</h1>
          {isFetching ? <ProductLoader/> : error ? 'error' : (
          <>
            <ProductList products={data?.products} layout={5}/>
            <button disabled={true}>LOAD MORE</button>
          </>
        )}
      </section>
    </Container>
  )
}

export default Category