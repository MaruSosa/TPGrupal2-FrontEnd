import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Database, 
  Globe, 
  GitFork, 
  BookOpen, 
  Menu, 
  X 
} from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { path: '/', label: 'Portada', icon: Home },
    { path: '/perfil/mariana', label: 'Mi Perfil', icon: Users },
    { path: '/datos-locales', label: 'Datos Locales (JSON)', icon: Database },
    { path: '/api', label: 'API Pública', icon: Globe },
    { path: '/arbol', label: 'Árbol Renderizado', icon: GitFork },
    { path: '/bitacora', label: 'Bitácora', icon: BookOpen },
  ];

  return (
    <>
      {/* Botón menú hamburguesa para versión mobile */}
      <button 
        onClick={toggleSidebar} 
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 50,
          background: '#2563eb',
          color: 'white',
          border: 'none',
          padding: '0.5rem',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Contenedor Sidebar */}
      <aside style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '240px',
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '1.5rem 1rem',
        boxSizing: 'border-box',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div style={{ marginTop: '2.5rem', paddingBottom: '1rem', borderBottom: '1px solid #334155' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Equipo Devs</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>FrontEnd TP2</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  backgroundColor: isActive ? '#2563eb' : 'transparent',
                  fontWeight: isActive ? '600' : 'normal',
                  transition: 'background-color 0.2s, color 0.2s'
                })}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}