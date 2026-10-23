import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';

export function Profile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('skills');

  // Buscar el integrante según el id de la URL
  const member = teamMembers.find((m) => m.id === id) || teamMembers[0];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600', display: 'inline-block', marginBottom: '1rem' }}>
        ← Volver a la Portada
      </Link>

      <div style={{
        border: '1px solid #e2e8f0',
        borderRadius: '1rem',
        padding: '2rem',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <img src={member.avatar} alt={member.name} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#f1f5f9' }} />
          <div>
            <h1 style={{ margin: '0 0 0.25rem 0' }}>{member.name}</h1>
            <p style={{ margin: '0 0 0.5rem 0', color: '#2563eb', fontWeight: '600' }}>{member.role}</p>
            <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#475569', textDecoration: 'underline' }}>
              Visitar perfil de GitHub ↗
            </a>
          </div>
        </div>

        <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>{member.bio}</p>

        {/* Pestañas Interactivas (Nivel Propone para Criterio 08) */}
        <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setActiveTab('skills')}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'skills' ? '2px solid #2563eb' : 'none',
              marginBottom: '-2px',
              fontWeight: activeTab === 'skills' ? 'bold' : 'normal',
              color: activeTab === 'skills' ? '#2563eb' : '#64748b',
              cursor: 'pointer'
            }}
          >
            Habilidades Técnicas
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'contact' ? '2px solid #2563eb' : 'none',
              marginBottom: '-2px',
              fontWeight: activeTab === 'contact' ? 'bold' : 'normal',
              color: activeTab === 'contact' ? '#2563eb' : '#64748b',
              cursor: 'pointer'
            }}
          >
            Contacto y Enlaces
          </button>
        </div>

        {/* Contenido según la pestaña activa */}
        {activeTab === 'skills' && (
          <div>
            <h3>Tecnologías y Herramientas dominadas:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
              {member.skills.map((skill, index) => (
                <span key={index} style={{
                  backgroundColor: '#eff6ff',
                  color: '#1d4ed8',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <h3>Información de Contacto Académico:</h3>
            <p style={{ color: '#475569', marginTop: '0.5rem' }}>
              Estudiante activo en Sistemas Engineering & Software Development. Disponible para proyectos colaborativos en frontend y backend.
            </p>
            <a href={member.github} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              marginTop: '0.75rem',
              backgroundColor: '#1e293b',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>
              Ver Repositorios en GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}