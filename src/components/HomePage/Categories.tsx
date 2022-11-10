import { useGetProductsCategoriesQuery } from '../../app/services/productsApi';

import {Link} from 'react-router-dom'

import styles from '../../css/HomePage/Categories.module.css'

const Categories = () => {
  const { data, isFetching, error } = useGetProductsCategoriesQuery();

  return (
    <section className={styles.categoriesWrap}>
        <h2>Categories</h2>
        <ul className={styles.categoriesList}>
            {data?.map((cat, id) => (
                <li key={`${cat}-${id}`}><Link to={`/categories/${cat}`}>{cat.split('-').join(' ')}</Link></li>
            ))}
        </ul>
    </section>
  )
}

export default Categories