import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Button, Box } from '@mui/material';

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Choose Your Spiritual Development Course</h2>

      <FormControl variant="outlined" style={{ minWidth: 300, marginTop: '20px' }}>
        <InputLabel id="course-label">Select a Course</InputLabel>
        <Select
          labelId="course-label"
          value={selectedCourse}
          onChange={handleSelectChange}
          label="Select a Course"
        >
          <MenuItem value="">
            <em>-- Choose a Course --</em>
          </MenuItem>
          <MenuItem value="Physical Harmony">Physical Harmony</MenuItem>
          <MenuItem value="Breathing Practices">Breathing Practices</MenuItem>
          <MenuItem value="Soul Healing">Soul Healing</MenuItem>
          <MenuItem value="Overcoming Panic Attacks">Overcoming Panic Attacks</MenuItem>
        </Select>
      </FormControl>

      {selectedCourse && (
        <Box textAlign="center" style={{ marginTop: '20px' }}>
          <h3>You selected: {selectedCourse}</h3>
          <p>Here you will find information about the {selectedCourse} course.</p>
          <Button variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
            GET A HUG
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Courses;