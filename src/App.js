import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './components/CartContext';


const App = () => {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:idCategory' element={<ItemListContainer />}></Route>
          <Route path='/item/:idItem' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  ); 
}

export default App;
