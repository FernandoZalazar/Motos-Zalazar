import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


const Cart = () => {

    const test = useContext(CartContext);
    return (
        <>
        <h1> ¡Tu Carrito de Compras!</h1>
        <Link to='/'><button>Continuar Comprando</button> </Link>
        {
            (test.cartList.lenght > 0)
            ? <button type="filled" onClick={test.removeList}>Remover Todos los Productos</button>
            : <button>Tu carrito esta vacio</button> 
        }   
        
        
        {
            test.cartList.lenght > 0 &&
            test.cartList.map(item => (
                <div>
                    <img src={item.img}></img>
                    <span>
                        <b>Produtos:</b> {toStitem.name}
                    </span>
                    <h1>{item.qty}item</h1>
                    <h1>$ {item.precio}each</h1>
                </div>
            ))
        }
        
            
        </>
    );
}

export default Cart;