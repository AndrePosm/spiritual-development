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
      <Typography variant="body1" align="center" paragraph>
        In Swedish, the word “Lagom” encapsulates the idea of balance and moderation. It’s often translated as “just the right amount,” 
        representing the perfect harmony between too much and too little. Rooted in Scandinavian culture, “Lagom” reflects a mindful 
        approach to life, encouraging individuals to find equilibrium in everything they do — from physical strength to mental well-being 
        and beyond.
      </Typography>
      
      {/* Section: Our Mission */}
      <Typography variant="h4" align="center" gutterBottom>
        Our Mission
      </Typography>
      
      <Typography variant="body1" align="center" paragraph>
        Our mission is to guide you on a journey towards a balanced, empowered life. Our portal is dedicated to helping you cultivate 
        strength, practice mindful breathing, and achieve psychological clarity. Just like the concept of “Lagom,” we believe true power 
        lies not in extremes but in the flow of moderation, where body and mind are in perfect sync.
      </Typography>
      
      {/* Section: Discover Your Flow */}
      <Typography variant="h4" align="center" gutterBottom>
        Discover Your Flow
      </Typography>
      
      <Typography variant="body1" align="center" paragraph>
        Here, you’ll discover the tools to harness your energy and align with the natural rhythm of life. Lagom Flow is more than a platform 
        — it’s a philosophy of living with intention, embracing balance, and finding your personal flow.
      </Typography>

      {/* Centered Champion Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <ChampionButton />
      </div>
    </Container>
  );
}

export default Home;