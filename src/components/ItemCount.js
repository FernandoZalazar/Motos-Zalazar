import { useEffect, useState } from "react";

const ItemCount = ({ stock= 0, initial =1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial+1) {
            setCount(count -1);
        }
    }
    return (
        <>
            <div>
                <button onClick={increment}></button>
                <h1>{count}</h1>
                <button onClick={decrement}></button>
                {
                    stock && count
                    ? <button onClick={() => onAdd (count)}>Add to Cart</button>
                    :<button disabled>Add to cart</button>
                }
            </div>
        </>
    )
}

export default ItemCount;

