import React from 'react';
import useForm from '../utils/State/useForm';

const Form = () => {
  
  const enter = () => {
    console.log('Values!', values);
  }
  const [values,  handleChange, handleSubmit] = useForm(enter);

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        type="text"
        name="name"
        value={values.name || ''}
        onChange={handleChange}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={values.password || '' }
        onChange={handleChange}
      />

      <button>Enter -></button>
    </form>
  )
};

export default Form;
