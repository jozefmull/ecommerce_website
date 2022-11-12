import styles from '../../css/Products/ProductGallery.module.css'

type Props = {
  images: string[] | undefined 
}

const ProductGallery = ({images}: Props) => {
  
  return (
    <div className={styles.galleryWrap}>
      <ul>
        {images ? images.map((image,id) => (
          <li key={`product-image-${id}`}><img src={image} alt="product-galerry-list-item" /></li>
        )) : null}
      </ul>
      <img src={images ? images[0] : ''} alt="product-gallery" loading="lazy"/>
    </div>
  )
}

export default ProductGallery