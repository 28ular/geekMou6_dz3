import {useCounter} from "../store/counter.js";

export const Counter = () => {

    const {count , inc , dec , reset} = useCounter();

    return (
        <>
            <button onClick={dec}>-</button>
            <b>{count}</b>
            <button onClick={inc}>+</button>
            <button onClick={reset}>reset</button>

        </>
    )
}