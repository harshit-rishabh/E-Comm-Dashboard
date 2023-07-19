import './App.css';
import Nav from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct';
import Productlist from './Components/Productlist';
import Updateproduct from './Components/Updateproduct';
function App() {
  return (
    <div className="App">
      {/* <h1 style = {{color:"green" }}>E-comm dashboard :)</h1> */}
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element = {<PrivateComponent />}>
        <Route path='/' element ={<Productlist />} />
        <Route path='/add' element ={<Addproduct />} />
        <Route path='/update/:id' element ={<Updateproduct />} />
        <Route path='/logout' element ={<h1>Logout</h1>} />
        </Route>

        <Route path='/signup' element ={<SignUp />} />
        <Route path='/login' element ={<Login />} />

      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
