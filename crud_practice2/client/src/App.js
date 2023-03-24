
import './App.css';


import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import NavBar from './components/NavBar';
import Crud from './components/Crud';



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (
    <>
     <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Crud />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
       

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
