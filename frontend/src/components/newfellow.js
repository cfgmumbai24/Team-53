
import React, { useState } from 'react';

const AddFellowForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFellowData = {
      name,
      email,
      password,
      photo
    };
    console.log('Submitted data:', newFellowData);
    setName('');
    setEmail('');
    setPassword('');
    setPhoto(null);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Add Fellow</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              accept=".jpg, .jpeg, .png"
              onChange={handlePhotoChange}
              required
            />
            <label htmlFor="photo" className="custom-file-upload">
              Upload Photo
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddFellowForm;