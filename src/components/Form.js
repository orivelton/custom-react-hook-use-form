import React from 'react';

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Enter!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" />

      <label>Password:</label>
      <input type="text" />

      <button>Enter -></button>
    </form>
  )
};

export default Form;
