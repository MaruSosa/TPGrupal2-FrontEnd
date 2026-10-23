import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { LocalDataPage } from './pages/LocalDataPage';
import { ApiPage } from './pages/ApiPage';
import { ComponentTree } from './pages/ComponentTree';
import { Changelog } from './pages/Changelog';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil/:id" element={<Profile />} />
          <Route path="datos-locales" element={<LocalDataPage />} />
          <Route path="api" element={<ApiPage />} />
          <Route path="arbol" element={<ComponentTree />} />
          <Route path="bitacora" element={<Changelog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;