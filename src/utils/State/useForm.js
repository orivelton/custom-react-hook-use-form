import  { useState } from 'react';

const useForm = event => {
  const [state, setState] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    event();
  }

  const handleChange = e => {
    e.persist();
    setState(state => ({...state, [e.target.name]: e.target.value}))
  }

  return [state, handleChange, handleSubmit];

};

export default useForm;