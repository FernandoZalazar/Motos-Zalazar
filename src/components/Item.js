import '../Styles/Items.css';
import { Link } from 'react-router-dom';

const Item = ({img, marca, modelo, cilindradas, anos, description}) => {

  return (
    <>
        <div className='divitems'>
          <img src={img} className='img'></img>

          <h1 className='marca itemstyle'>{marca}</h1>
          <h2 className='modelo itemstyle'>{modelo}</h2>
          <h2 className='cilindrada itemstyle'>{cilindradas}</h2>
          <h2 className='anos itemstyle'>{anos}</h2>

          <Link to= {`/item/${id}`}><p>Detalle</p></Link>
          
          <p className='description itemstyle'>{description}</p>
        </div>        
    </>
  ); 
}

export default Item;