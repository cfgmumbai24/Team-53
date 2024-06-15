
import React, { useState } from 'react';

const AddAssessment = () => {
  const [listening, setListening] = useState('');
  const [speech, setSpeech] = useState('');
  const [literacy, setLiteracy] = useState('');
  const [reflect, setReflect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to server or processing locally
    const newStudentData = {
      listening: parseInt(listening), // Convert to integer
      speech: parseInt(speech), // Convert to integer
      literacy: parseInt(literacy), // Convert to integer
      reflect: parseInt(reflect) // Convert to integer
    };
    console.log('Submitted data:', newStudentData);

    // You can add further logic here, such as clearing the form fields or showing a success message
    // Clear form fields after submission
    setListening('');
    setSpeech('');
    setLiteracy('');
    setReflect('');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Ensure input value does not exceed maximum marks (10)
    if (!isNaN(value) && parseInt(value) <= 10) {
      switch (e.target.id) {
        case 'listening':
          setListening(value);
          break;
        case 'speech':
          setSpeech(value);
          break;
        case 'literacy':
          setLiteracy(value);
          break;
        case 'reflect':
          setReflect(value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="listening">Listening:</label>
        <input
          type="number"
          id="listening"
          value={listening}
          onChange={handleInputChange}
          min="0"
          max="10"
          required
        />
      </div>
      <div>
        <label htmlFor="speech">Speech:</label>
        <input
          type="number"
          id="speech"
          value={speech}
          onChange={handleInputChange}
          min="0"
          max="10"
          required
        />
      </div>
      <div>
        <label htmlFor="literacy">Literacy:</label>
        <input
          type="number"
          id="literacy"
          value={literacy}
          onChange={handleInputChange}
          min="0"
          max="10"
          required
        />
      </div>
      <div>
        <label htmlFor="reflect">Reflect:</label>
        <input
          type="number"
          id="reflect"
          value={reflect}
          onChange={handleInputChange}
          min="0"
          max="10"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddAssessment;