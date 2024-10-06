import React, { useState } from 'react';
import { getGPTResponse } from '../services/openaiService'; // Импорт функции для работы с API

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [response, setResponse] = useState('');

  const handleCourseSelect = async (event) => {
    const selectedValue = event.target.value;
    setSelectedCourse(selectedValue);

    const prompt = `You are an expert in spiritual development. Please provide a detailed and thoughtful recommendation for spiritual practices or exercises in the field of ${selectedValue}, focusing on improving well-being and personal growth.`;

    try {
      const gptResponse = await getGPTResponse(prompt);
      setResponse(gptResponse);
    } catch (error) {
      setResponse('Error fetching the course recommendations.');
    }
  };

  return (
    <div>
      <h2>Select a Course</h2>
      <select value={selectedCourse} onChange={handleCourseSelect}>
        <option value="">-- Choose a Course --</option>
        <option value="Physical Mastery">Physical Mastery</option>
        <option value="Breathing Practices">Breathing Practices</option>
        <option value="Soul Healing">Soul Healing</option>
        <option value="Panic Attack Management">Panic Attack Management</option>
      </select>

      <div>
        <h3>Course Recommendations</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Courses;