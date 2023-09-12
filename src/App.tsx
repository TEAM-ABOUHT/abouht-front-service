/* eslint-disable jsx-a11y/alt-text */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import Title from './pages/title';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/title" element={<Title />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
