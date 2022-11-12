import { useAppSelector, useAppDispatch } from '../app/hooks'
import { handleOverlay } from '../app/features/cart'


const Overlay = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart)
    const {overlay} = cart

  return (
    <div style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgb(100 100 100 / 50%)',
        zIndex: 10,
        cursor: 'pointer'
    }} onClick={() => dispatch(handleOverlay(!overlay))}></div>
  )
}

export default Overlay