import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === itemId);
        if (found === undefined) {
            setCartList ([
                ...cartList,
                {
                    id: item.id,
                    marca: item.marca,
                    modelo: item.modelo,
                    img: item.img[0],
                    precio: item.precio
                }
            ]);
        } else {
            found.qtyItem += qty;
    }
    const removeList = () => {
        setCartList([]);
    }
    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !=id);
        setCartList(result);
    }
    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }
    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.itemId));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    
    
    return (
        <CartContext.Provider value={{
            cartList,
             addToCart,
             removeList,
             deleteItem,
             calcSubTotal,
             calcTotalPerItem,
             }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;