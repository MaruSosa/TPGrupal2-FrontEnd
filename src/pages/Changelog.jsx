import React, { useState } from 'react';

export function Changelog() {
  const [openIndex, setOpenIndex] = useState(0);

  const logs = [
    {
      fecha: "Octubre 2026 - Sprint 3 (TP2)",
      autor: "Mariana y Equipo",
      titulo: "Migración a React, Sidebar y Rutas",
      detalle: "Se estructuró el proyecto utilizando React con Vite y React Router. Se diseñó el componente Sidebar con diseño adaptable y se integraron las vistas de perfiles, datos locales y consumo de API pública."
    },
    {
      fecha: "Octubre 2026 - Sprint 2 (TP2)",
      autor: "Equipo de Desarrollo",
      titulo: "Implementación de JSON Local, Búsqueda y Filtros",
      detalle: "Se incorporó el archivo local de 20 registros con componentes reutilizables, barra de búsqueda en tiempo real, selector de categorías por propiedad y un modal interactivo para detalles."
    },
    {
      fecha: "Septiembre 2026 - Sprint 1 (TP1/TP2)",
      autor: "Mariana",
      titulo: "Definición de Identidad Visual y Repositorio",
      detalle: "Se configuró el repositorio público en GitHub, se vinculó con Vercel para el despliegue continuo y se definieron las bases estéticas de la aplicación."
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h2>📖 Bitácora de Trabajo (Changelog)</h2>
      <p style={{ color: '#64748b' }}>Registro cronológico de decisiones, avances y dificultades resueltas por el equipo.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        {logs.map((log, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} style={{ border: '1px solid #cbd5e1', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: 'white' }}>
              <div 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: '#f1f5f9',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: '600'
                }}
              >
                <span>{log.fecha} — <span style={{ color: '#2563eb' }}>{log.titulo}</span></span>
                <span>{isOpen ? '▲' : '▼'}</span>
              </div>
              {isOpen && (
                <div style={{ padding: '1.25rem', borderTop: '1px solid #cbd5e1' }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#64748b' }}><strong>Responsable:</strong> {log.autor}</p>
                  <p style={{ margin: 0, color: '#334155', lineHeight: '1.5' }}>{log.detalle}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}