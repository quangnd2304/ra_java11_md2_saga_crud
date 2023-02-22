import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import NewUser from './components/NewUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUsers />} />
      <Route path='/newUser' element={<NewUser />} />
      <Route path='/updateUser' element={<UpdateUser />} />
    </Routes>
  );
}

export default App;
