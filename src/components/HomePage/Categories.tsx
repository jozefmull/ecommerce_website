import { useGetProductsCategoriesQuery } from '../../app/services/productsApi';

import {Link} from 'react-router-dom'

import styles from '../../css/HomePage/Categories.module.css'


import CategoriesLoading from '../Loading/HomePage/CategoriesLoading'

const Categories = () => {
  const { data, isFetching, error } = useGetProductsCategoriesQuery();


  return (
    <section className={styles.categoriesWrap}>
        <h2>Categories</h2>
        {/* if fetching display loader if not check error and if no error display data */}
        {isFetching ? <CategoriesLoading/> : error ? 'error' : (
          <ul className={styles.categoriesList}>
            {data?.map((cat, id) => (
                <li key={`${cat}-${id}`} style={{animationDelay: id + '0ms'}}>
                  <Link to={`/categories/${cat}`}>{cat.split('-').join(' ')}</Link>
                </li>
            ))}
          </ul>
        )}
    </section>
  )
}

export default Categories