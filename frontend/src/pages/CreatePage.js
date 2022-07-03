import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from '../components/Navigation';

function CreatePage() {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('lbs');
  const [date, setDate] = useState('');

  const history = useHistory();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 201) {
      alert('Exercise added successfully!');
    } else {
      alert('Failed to add exercise. Please try again.');
    }
    history.push('/');
  };

  return (
    <div>
      <h1 className='heading'>Exercise Tracker</h1>
      <Navigation />
      <h3>Add New Exercise</h3>
      <div className='input-form'>
        <div className='input-column-r-align'>
          <div className='padding'>Name:</div>
          <div className='padding'>Reps:</div>
          <div className='padding'>Weight:</div>
          <div className='padding'>Unit:</div>
          <div className='padding'>Date:</div>
        </div>
        <div className='input-column-l-align'>
          <input className='padding' type='text' placeholder='Exercise Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input className='padding' type='number' placeholder='# of times performed' value={reps} onChange={(e) => setReps(e.target.value)} />
          <input className='padding' type='number' placeholder='in lbs or kgs' value={weight} onChange={(e) => setWeight(e.target.value)} />
          <select className='padding' value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value='lbs'>lbs</option>
            <option value='kgs'>kgs</option>
          </select>
          <input className='padding' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div className='padding'>
        <button type='submit' onClick={addExercise}>
          Create Entry
        </button>
      </div>
    </div>
  );
}

export default CreatePage;
