import { SyntheticEvent} from 'react'
import { useLoadMoreProductsQuery } from '../../app/services/productsApi'

import styles from '../../css/Shop.module.css'

import {Product} from '../../app/types/products'

type Props = {
    skip: number,
    setskip: React.Dispatch<React.SetStateAction<number>>,
    total: number,
    setproducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const ShopLoadMore = ({skip, setskip, total, setproducts}: Props) => {

    const {data, error} = useLoadMoreProductsQuery({skip})

    const handleLoadMore = (e:SyntheticEvent) => {
        e.preventDefault()

        if (data !== undefined) {
            setproducts(prev => [...prev, ...data?.products])
        }

        if (skip < total) {
            setskip(prev => prev += 16)
        }else{
            console.log('asdassadas');
        }
    }

    
  return (
    <div className={styles.loadMoreWrap}>
        {error ? 'error' : null}
        {skip >= total ? (<span>No more products available!</span>) : null}
        <button onClick={(e) => handleLoadMore(e)} disabled={skip >= total}>LOAD MORE</button>
    </div>
  )
}

export default ShopLoadMore