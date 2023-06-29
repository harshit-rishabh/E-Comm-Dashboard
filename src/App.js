import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
      {/* <h1 style = {{color:"green" }}>E-comm dashboard :)</h1> */}
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element ={<h1>Our Products</h1>} />
        <Route path='/add' element ={<h1>Add Product</h1>} />
        <Route path='/update' element ={<h1>Update Product</h1>} />
        <Route path='/signup' element ={<SignUp />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
