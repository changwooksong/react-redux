import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
        // dispatch({ type: 'increment' });
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10));
        // dispatch({ type: 'increase', amount: 10 });
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
        // dispatch({ type: 'decrement' });
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
        // dispatch({ type: 'toggle' });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={decrementHandler}>decrement</button>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 10</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
