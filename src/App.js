
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar';
import {Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Sucess from './pages/Sucess';
import CartProvider from './CartContext';

function App() {
  return (
    <CartProvider>
      <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
      <Routes>
        <Route index element={<Store />}></Route>
        <Route path='sucess'element={<Sucess />}></Route>
        <Route path='cancel'element={<Cancel />}></Route>
      </Routes>
      </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
