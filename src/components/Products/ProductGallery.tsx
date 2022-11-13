import {useState} from 'react'
import styles from '../../css/Products/ProductGallery.module.css'

type Props = {
  images: string[] | undefined 
}

const ProductGallery = ({images}: Props) => {
  const [currIndex, setcurrIndex] = useState<number>(0)

  const handleChangeImage = (id:number) => {
    setcurrIndex(prev => prev = id)
  }
  
  return (
    <div className={styles.galleryWrap}>
      <ul>
        {images ? images.map((image,id) => (
          <li key={`product-image-${id}`} draggable={false} onClick={() => handleChangeImage(id)}  className={id === currIndex ? styles.current : undefined}><img src={image} alt="product-galerry-list-item" draggable={false}/></li>
        )) : null}
      </ul>
      <div className={styles.currentImgWrap}>
        <img src={images ? images[currIndex] : ''} alt="product-gallery" loading="lazy" width={'100%'} height={'auto'}  draggable="false"/>
      </div>
    </div>
  )
}

export default ProductGallery