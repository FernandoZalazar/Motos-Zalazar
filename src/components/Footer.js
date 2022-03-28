import '../Styles/Footer.css';

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='divcontacto'>
            <h2 className='contacto'>Contacto</h2>
            <p className='p'> Numero: 12785639
                Mail: Leonardo_diCaprio@gmail.com
            </p>
        </div>
        <div className='divubicacion'>
            <h2 className='ubicacion'>Ubicacion</h2>
            <p className='p2'>
                AV. SiempreViva 123, entre calle Falsa y Ninguna
            </p>

        </div>
        <div className='divhorario'>
            <h2 className='horarios'>Horarios de Atencion</h2>
            <p className='p3'>
                de Lunes a Viernes: de 8:00 a 17:00hs
                Sabados: de 9:00 a 14:00hs
                Domingos: Cerrado
            </p>
        </div>
    </div>
    </>
  ); 
}

export default Footer;
