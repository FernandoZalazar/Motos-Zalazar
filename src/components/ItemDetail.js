import '../Styles/Items.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

const ItemDetail = ({item}) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    setItemCount(qty);
    test.addToCart(item, qty);
  }

  return (
    <>
    {
      item && item.image
      
    }
        <div className='divitems'>
          <img src={item.img} className='img'></img>

          <h1 className='marca itemstyle'>{item.marca}</h1>
          <h2 className='modelo itemstyle'>{item.modelo}</h2>
          <h2 className='cilindrada itemstyle'>{item.cilindradas}</h2>
          <h2 className='anos itemstyle'>{item.anos}</h2>

          <Link to= {`/item/${id}`}><p>Detalle</p></Link>
          
          <p className='description itemstyle'>{item.description}</p>
        </div>        
    </>
  ); 
}

export default ItemDetail;