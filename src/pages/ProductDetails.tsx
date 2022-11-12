import {useParams} from 'react-router-dom'
import {useGetProductQuery} from '../app/services/productsApi'
import { useAppDispatch } from '../app/hooks'
import { addToCart } from '../app/features/cart'

import Container from '../components/Container'
import ProductGallery from '../components/Products/ProductGallery'
import StarRating from '../components/Products/StarRating'
import ProductLoader from '../components/Loading/Product/ProuctLoader'

import styles from '../css/Products/ProductDetails.module.css'
type Props = {}

const ProductDetails = (props: Props) => {
    const dispatch = useAppDispatch()
    const {productId} = useParams()

    const {data, isFetching, error} = useGetProductQuery({ productId })

  return (
    <Container>
        {/* if fetching display loader if not check error and if no error display data */}
        {isFetching ? <ProductLoader/> : error ? 'error' : (
                        <section className={styles.productDetailsWrap}>
                            <section className={styles.productDetailsLeft}>
                                <ProductGallery images={data?.images}/>
                            </section>
                            <section className={styles.productDetailsRight}>
                                <h1>{data?.title}</h1>
                                <h2>{data?.brand}</h2>
                                <div className={styles.category}>
                                    <div>
                                        <h3>Category:</h3>
                                        <button className={styles.categoryButton}>{data?.category}</button>
                                    </div>
                                </div>
                                <div className={styles.price}>
                                    <div>
                                        <h3>Price:</h3>
                                        <span className={data?.discountPercentage ? styles.discount : ''}>$ {data?.price}</span>
                                        {data?.discountPercentage ? (<em>-{data?.discountPercentage}%</em>) : null}
                                    </div>
                                    {data?.discountPercentage && 
                                        <span className={styles.discountedPrice}>
                                            $ {(data?.price - (data?.price * (data?.discountPercentage / 100))).toFixed(2)}
                                        </span>
                                    }
                                </div>
                                <div className={styles.stock}>
                                    <h3>Stock:</h3>
                                    <span className={data?.stock && data?.stock > 0 ? styles.inStock : styles.outOfStock}>
                                        {data?.stock && data?.stock > 0 ? 'In stock' : 'Out of stock'}
                                    </span>
                                </div>
                                <div className={styles.rating}>
                                    <h3>Rating:</h3>
                                    <StarRating rating={data?.rating} size={'lg'}/>
                                </div>
                                {data ? (
                                    <button  className={styles.cartButton} onClick={() => dispatch(addToCart(data))}>ADD TO CART</button>
                                ) : null}
                                <p>{data?.description}</p>
                            </section>
                        </section>
            )}
    </Container>
  )
}

export default ProductDetails