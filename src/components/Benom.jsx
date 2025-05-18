import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../lib/redux-toolkit/slices/counter-slice'

function Benom() {
    const {value} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(increment(4))}>
            +
        </button>
        <span>{value}</span>
        <button onClick={()=> dispatch(decrement(4))}>
            -
        </button>
      
    </div>
  )
}

export default Benom
