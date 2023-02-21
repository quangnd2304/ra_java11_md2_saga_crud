import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import NewUser from './components/NewUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUsers />} />
      <Route path='/newUser' element={<NewUser />} />
    </Routes>
  );
}

export default App;
