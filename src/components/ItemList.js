import '../Styles/Items.css';
import { Link } from 'react-router-dom';

const ItemList = ({items}) => {

  if (items.lenght >  0) {
    return (
        <>
            <div className='divitems'>
              <img src={items.img} className='img'></img>

              <h1 className='marca itemstyle'>{items.marca}</h1>
              <h2 className='modelo itemstyle'>{items.modelo}</h2>
              <h2 className='cilindrada itemstyle'>{items.cilindradas}</h2>
              <h2 className='anos itemstyle'>{items.anos}</h2>

              <Link to= {`/item/${id}`}><p>Detalle</p></Link>
              
              <p className='description itemstyle'>{items.description}</p>
            </div>        
        </>
      ); 
  } else {
    return <p>Cargando...</p>
  }
  
}

export default ItemList;