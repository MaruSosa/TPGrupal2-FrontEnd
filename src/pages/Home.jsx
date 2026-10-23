import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';
import { ArrowRight, Code2 } from 'lucide-react';

export function Home() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem' }}>
      {/* Hero Section */}
      <div style={{
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '3rem 2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        marginBottom: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'inline-flex', padding: '0.75rem', backgroundColor: '#2563eb', borderRadius: '50%', marginBottom: '1rem' }}>
          <Code2 size={32} color="white" />
        </div>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Equipo Devs — TP2 React</h1>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
          Aplicación web interactiva desarrollada en equipo con React, React Router y asistencia de inteligencia artificial. Presentamos nuestra arquitectura, componentes, datos locales y consumo de APIs.
        </p>
        <Link to="/datos-locales" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: '600'
        }}>
          Explorar Recursos <ArrowRight size={18} />
        </Link>
      </div>

      {/* Sección de Integrantes */}
      <h2>👥 Integrantes del Equipo</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Haz clic en el perfil de cada integrante para ver su información detallada y habilidades.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {teamMembers.map((member) => (
          <div key={member.id} style={{
            border: '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img src={member.avatar} alt={member.name} style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f1f5f9', marginBottom: '1rem' }} />
            <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem' }}>{member.name}</h3>
            <p style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: '600', margin: '0 0 0.75rem 0' }}>{member.role}</p>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: '1.4' }}>{member.bio}</p>
            
            <Link to={`/perfil/${member.id}`} style={{
              marginTop: 'auto',
              width: '100%',
              padding: '0.6rem',
              backgroundColor: '#f1f5f9',
              color: '#1e293b',
              border: '1px solid #cbd5e1',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Ver Perfil Completo →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}