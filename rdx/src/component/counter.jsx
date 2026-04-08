import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from '../../redux/feature/counter/counterSlice';

export const Counter = () => {
    // read the data from the store and assign it to a variable
    const count = useSelector((state) => state.counter.value);

    // changing the data in the store by dispatching the action
    const dispatch = useDispatch();

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;