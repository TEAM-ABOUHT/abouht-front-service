/* eslint-disable jsx-a11y/alt-text */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChannelService from './ChannelService';
import Main from './pages/main';
import Title from './pages/title';
import Login from './pages/login';
import Register from './pages/register';
import Write from './pages/write';
import Privacy from './pages/privacy';
import Subscribe from './pages/subscribe';
import { CookiesProvider } from 'react-cookie';
function App() {
  ChannelService.loadScript();

  ChannelService.boot({
    pluginKey: import.meta.env.VITE_CHANNEL_PLUGIN_KEY!,
  });

  return (
    <BrowserRouter>
      <Routes>
        <CookiesProvider>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/title" element={<Title />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<Write />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </CookiesProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
