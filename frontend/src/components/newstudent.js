
import React, { useState } from 'react';

const AddStudentForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to server or processing locally
    const newStudentData = {
      name,
      image
    };
    console.log('Submitted data:', newStudentData);

    // You can add further logic here, such as clearing the form fields or showing a success message
    // Clear form fields after submission
    setName('');
    setImage(null);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name of Student:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image of Student:</label>
        <input
          type="file"
          id="image"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudentForm;