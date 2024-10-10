import React from 'react';
import { Typography, Container } from '@mui/material';
import ChampionButton from '../components/ChampionButton'; // Import ChampionButton

function Home() {
  return (
    <Container>
      {/* Title */}
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Lagom Flow: The Path to Balanced Strength and Inner Peace
      </Typography>
      
      {/* First Paragraph */}
      <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.5rem', color: '#666' }}>
        In Swedish, the word <span style={{ fontWeight: 'bold', color: 'black' }}>“Lagom”</span> encapsulates the idea of 
        <span style={{ fontWeight: 'bold', color: 'black' }}> balance and moderation</span>. It’s often translated as 
        “just the right amount,” representing the perfect harmony between too much and too little. Rooted in Scandinavian culture, 
        “Lagom” reflects a mindful approach to life, encouraging individuals to find equilibrium in everything they do — 
        from <span style={{ fontWeight: 'bold', color: 'black' }}> physical strength to mental well-being and beyond</span>.
      </Typography>
      
      {/* Section: Our Mission */}
      <Typography variant="h4" align="center" gutterBottom>
        Our Mission
      </Typography>
      
      <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.5rem', color: '#666' }}>
        Our mission is to guide you on a journey towards a <span style={{ fontWeight: 'bold', color: 'black' }}>
        balanced, empowered life</span>. Our portal is dedicated to helping you cultivate 
        <span style={{ fontWeight: 'bold', color: 'black' }}> strength, practice mindful breathing, and achieve psychological clarity</span>. 
        Just like the concept of “Lagom,” we believe true power lies not in extremes but in 
        the flow of moderation, where <span style={{ fontWeight: 'bold', color: 'black' }}>body and mind</span> are in perfect sync.
      </Typography>
      
      {/* Section: Discover Your Flow */}
      <Typography variant="h4" align="center" gutterBottom>
        Discover Your Flow
      </Typography>
      
      <Typography variant="body1" align="center" paragraph style={{ fontSize: '1.5rem', color: '#666' }}>
        Here, you’ll discover the <span style={{ fontWeight: 'bold', color: 'black' }}>tools</span> to harness your energy and align with 
        the <span style={{ fontWeight: 'bold', color: 'black' }}>natural rhythm of life</span>. Lagom Flow is more than a platform 
        — it’s a philosophy of living with intention, embracing balance, and <span style={{ fontWeight: 'bold', color: 'black' }}>
        finding your personal flow</span>.
      </Typography>

      {/* Centered Champion Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <ChampionButton />
      </div>
    </Container>
  );
}

export default Home;