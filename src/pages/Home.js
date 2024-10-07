import React from 'react';
import ChampionButton from '../components/ChampionButton'; // Импортируем нашу новую кнопку

function Home() {
  return (
    <div>
      <h2>Welcome to the Individual Spiritual Development Program</h2>
      <ChampionButton /> {/* Используем кастомную кнопку */}
    </div>
  );
}

export default Home;