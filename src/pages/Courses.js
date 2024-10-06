import React, { useState } from 'react';
import { getGPTResponse } from '../services/openaiService'; // Импорт функции для работы с API

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [response, setResponse] = useState('');

  const handleCourseSelect = async (event) => {
    const selectedValue = event.target.value;
    setSelectedCourse(selectedValue);

    let prompt = '';

    switch (selectedValue) {
      case 'Physical Harmony':
        prompt = 'Provide a brief tip for achieving physical harmony in training and nutrition.';
        break;
      case 'Breathing Practices':
        prompt = 'Give a short guide on how to start daily breathing exercises to reduce stress.';
        break;
      case 'Soul Healing':
        prompt = 'Share a quick spiritual healing tip for emotional well-being.';
        break;
      case 'Overcoming Panic Attacks':
        prompt = 'Provide a short technique to help manage panic attacks.';
        break;
      default:
        prompt = 'Give me a short tip for spiritual development.';
        break;
    }

    try {
      const gptResponse = await getGPTResponse(prompt);
      setResponse(`${gptResponse} \n\n For a personalized plan, GET A HUG to receive individual recommendations.`);
    } catch (error) {
      setResponse('Error fetching the course recommendations.');
    }
  };

  return (
    <div>
      <h2>Select a Course</h2>
      <select value={selectedCourse} onChange={handleCourseSelect}>
        <option value="">-- Choose a Course --</option>
        <option value="Physical Harmony">Physical Harmony</option>
        <option value="Breathing Practices">Breathing Practices</option>
        <option value="Soul Healing">Soul Healing</option>
        <option value="Overcoming Panic Attacks">Overcoming Panic Attacks</option>
      </select>

      {selectedCourse && (
        <div>
          <h3>You selected: {selectedCourse}</h3>
          <p>{response ? response : `Here you will find information about the ${selectedCourse} course.`}</p>
        </div>
      )}
    </div>
  );
}

export default Courses;