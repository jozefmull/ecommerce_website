import styles from '../../css/Products/StarRating.module.css'

type Props = {
    rating: number | undefined,
    size: string
}

const StarRating = ({rating, size}: Props) => {

    if (rating) {
        rating = Math.round(rating)
    }
    
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, id) => {        
        return (         
          <span key={`star-rating-${id}`} 
          className={`
            ${styles.star}
            ${size === 'sm' ? styles.sm : null}
            ${rating && id + 1 <= rating ? styles.full : styles.empty}
          `}>&#9733;</span>        
        );
      })}
    </div>
  )
}

export default StarRating