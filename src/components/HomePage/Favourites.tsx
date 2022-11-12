import { useGetFavouriteProductsQuery } from '../../app/services/productsApi'
import {Link} from 'react-router-dom'

import ProductList from '../Products/ProductList'
import ProductLoader from '../Loading/HomePage/ProductLoader'

import styles from '../../css/HomePage/Favourites.module.css'

const Favourites = () => {
  const { data, isFetching, error } = useGetFavouriteProductsQuery();

  return (
    <section className={styles.favouritesWrap}>
      <h2>Favourites</h2>
      {/* if fetching loader if not check error if not error display data */}
      {isFetching ? <ProductLoader/> : error ? 'error' : (
          <>
            <ProductList products={data?.products} layout={4} anim={true}/>
            <Link to='/shop'>SEE MORE</Link>
          </>
        )}
    </section>
  )
}

export default Favourites