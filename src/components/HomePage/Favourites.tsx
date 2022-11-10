import { useGetFavouriteProductsQuery } from '../../app/services/productsApi'
import {Link} from 'react-router-dom'

import ProductList from '../Products/ProductList'

import styles from '../../css/HomePage/Favourites.module.css'

type Props = {}

const Favourites = (props: Props) => {
  const { data, isFetching, error } = useGetFavouriteProductsQuery();

  return (
    <section className={styles.favouritesWrap}>
      <h2>Favourites</h2>
      <ProductList products={data?.products} layout={4}/>
      <Link to='/shop'>SEE MORE</Link>
    </section>
  )
}

export default Favourites