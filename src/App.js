
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
      <HomePage/>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/About'element={<About/>}></Route>
        <Route path='/Products'element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
