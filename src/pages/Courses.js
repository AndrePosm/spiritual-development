import React, { useState } from 'react';

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <h2>Choose Your Spiritual Development Course</h2>
      <select value={selectedCourse} onChange={handleSelectChange}>
        <option value="">-- Select a Course --</option>
        <option value="Physical Harmony">Physical Harmony</option>
        <option value="Breathing Practices">Breathing Practices</option>
        <option value="Soul Healing">Soul Healing</option>
        <option value="Overcoming Panic Attacks">Overcoming Panic Attacks</option>
      </select>

      {selectedCourse && (
        <div>
          <h3>You selected: {selectedCourse}</h3>
          <p>Here you will find information about the {selectedCourse} course.</p>
        </div>
      )}
    </div>
  );
}

export default Courses;