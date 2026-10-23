import React, { useState } from 'react';

export function ComponentTree() {
  const [expanded, setExpanded] = useState({
    app: true,
    layout: true,
    pages: true
  });

  const toggleNode = (node) => {
    setExpanded(prev => ({ ...prev, [node]: !prev[node] }));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h2>🌳 Árbol de Componentes (Renderizado)</h2>
      <p style={{ color: '#64748b' }}>Jerarquía real de componentes de nuestra aplicación React (Haz clic para expandir/contraer).</p>

      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1.5rem', fontFamily: 'monospace' }}>
        
        {/* Nodo App */}
        <div style={{ marginBottom: '0.75rem' }}>
          <span 
            onClick={() => toggleNode('app')} 
            style={{ cursor: 'pointer', fontWeight: 'bold', color: '#2563eb' }}
          >
            {expanded.app ? '▼' : '▶'} &lt;App /&gt;
          </span>
          <span style={{ fontSize: '0.85rem', color: '#64748b', marginLeft: '0.5rem' }}>(Raíz, Configura BrowserRouter y Rutas)</span>
          
          {expanded.app && (
            <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem', borderLeft: '2px dashed #cbd5e1', paddingLeft: '1rem' }}>
              
              {/* Nodo Layout */}
              <div style={{ marginBottom: '0.75rem' }}>
                <span 
                  onClick={() => toggleNode('layout')} 
                  style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0d9488' }}
                >
                  {expanded.layout ? '▼' : '▶'} &lt;Layout /&gt;
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b', marginLeft: '0.5rem' }}>(Contenedor principal con Sidebar y Outlet)</span>

                {expanded.layout && (
                  <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem', borderLeft: '2px dashed #cbd5e1', paddingLeft: '1rem' }}>
                    <div>🧩 &lt;Sidebar /&gt; <span style={{ fontSize: '0.85rem', color: '#64748b' }}>(Menú de navegación responsive)</span></div>
                    <div style={{ marginTop: '0.5rem' }}>
                      <span 
                        onClick={() => toggleNode('pages')} 
                        style={{ cursor: 'pointer', fontWeight: 'bold', color: '#7c3aed' }}
                      >
                        {expanded.pages ? '▼' : '▶'} &lt;Outlet /&gt; (Vistas / Páginas dinámicas)
                      </span>
                      {expanded.pages && (
                        <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.9rem', color: '#334155' }}>
                          <div>📄 &lt;Home /&gt; (Portada del equipo)</div>
                          <div>📄 &lt;Profile /&gt; (Perfiles individuales)</div>
                          <div>📄 &lt;LocalDataPage /&gt; (Listado JSON, búsqueda, filtros y modales)</div>
                          <div>📄 &lt;ApiPage /&gt; (Consumo de API pública, estados y reintento)</div>
                          <div>📄 &lt;ComponentTree /&gt; (Árbol interactivo)</div>
                          <div>📄 &lt;Changelog /&gt; (Bitácora de trabajo)</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}