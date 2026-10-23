import React, { useState, useEffect } from 'react';

export function ApiPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para consultar la API pública
  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
      if (!response.ok) {
        throw new Error('No se pudo conectar con el servidor de la API.');
      }
      const data = await response.json();
      setCharacters(data.results.slice(0, 12)); // Tomamos 12 personajes
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem' }}>
      <h2>🌐 Consumo de API Pública</h2>
      
      {/* Explicación del aporte de la API (Exigido por la consigna) */}
      <div style={{
        backgroundColor: '#eff6ff',
        borderLeft: '4px solid #2563eb',
        padding: '1rem',
        borderRadius: '0.375rem',
        marginBottom: '1.5rem'
      }}>
        <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.95rem' }}>
          <strong>📌 Aporte de esta API al proyecto:</strong> Esta sección consume una API REST externa en tiempo real para demostrar el manejo de asincronía en React mediante <code>useEffect</code> y <code>fetch</code>, gestionando adecuadamente los estados de carga, error y renderizado de datos dinámicos.
        </p>
      </div>

      {/* Botón para Reintentar / Actualizar (Exigido para Nivel Propone) */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Personajes obtenidos: <strong>{characters.length}</strong></span>
        <button
          onClick={fetchCharacters}
          disabled={loading}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '0.375rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Cargando...' : '🔄 Reintentar / Actualizar Datos'}
        </button>
      </div>

      {/* Estado de CARGA */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            border: '4px solid #cbd5e1',
            borderTopColor: '#2563eb',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ marginTop: '1rem', color: '#64748b' }}>Cargando datos desde la API pública...</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Estado de ERROR */}
      {error && !loading && (
        <div style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          color: '#991b1b',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <h3>⚠️ Ocurrió un error al cargar la API</h3>
          <p>{error}</p>
          <button
            onClick={fetchCharacters}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              marginTop: '0.5rem'
            }}
          >
            Intentar nuevamente
          </button>
        </div>
      )}

      {/* RESULTADOS EXITOSOS */}
      {!loading && !error && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.25rem'
        }}>
          {characters.map((char) => (
            <div key={char.id} style={{
              border: '1px solid #e2e8f0',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <img src={char.image} alt={char.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '0.75rem' }}>
                <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{char.name}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
                  Especie: {char.species}
                </p>
                <span style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  backgroundColor: char.status === 'Alive' ? '#dcfce7' : '#fee2e2',
                  color: char.status === 'Alive' ? '#166534' : '#991b1b'
                }}>
                  {char.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}