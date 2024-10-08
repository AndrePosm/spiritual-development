import React from 'react';
import ChampionButton from '../components/ChampionButton';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Высота на весь экран для центрирования по вертикали
      textAlign: 'center', // Выравнивание текста по центру
    }}>
      <h2>Welcome to the Individual Spiritual Development Program</h2>
      <ChampionButton />
    </div>
  );
}

export default Home;