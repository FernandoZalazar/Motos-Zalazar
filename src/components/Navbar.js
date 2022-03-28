import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <Link to="/" className='moto textstyle'>MOTORCYCLE.WOW</Link>

        <Link to="/category/1" className='pista textstyle border'>Pista</Link>
        <Link to="/category/3" className='enduro textstyle border'>Enduro</Link>
        <Link to="/category/2" className='calle textstyle border'>Calle</Link>

        <Link to="#" className='registrarme textstyle'>Resgistrarte</Link>
        <Link to="#" className='iniciar textstyle'>Iniciar secion</Link>
        <button><CartWidget /></button>
    </div>
    </>
  ); 
}

export default Navbar;
