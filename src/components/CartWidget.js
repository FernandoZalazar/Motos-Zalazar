import { CartContext } from "./CartContext";
import {useContext } from 'react';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <>
        <Badge badgeContent={test.calcItemsQty()}>
        </Badge>
        </>
    )
}
export default CartWidget;