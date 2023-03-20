import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import IndexMerk from './pages/merk/IndexMerk';
import IndexSparepart from './pages/sparepart/IndexSparepart';
import IndexType from './pages/type/IndexType';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home/>} ></Route>
        <Route path="/merk" element={<IndexMerk/>} ></Route>
        <Route path="/sparepart" element={<IndexSparepart/>} ></Route>
        <Route path="/type" element={<IndexType/>} ></Route>
      </Routes>
    </BrowserRouter>
    {/* <h1>INI HALAMAN APP KU</h1>
    <Navbar></Navbar>
    <Home></Home>
    <IndexMerk></IndexMerk> */}
   </div>
  );
}

export default App;
