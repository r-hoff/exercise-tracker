import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from '../components/Navigation';

function EditPage({ exerciseToEdit }) {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  const history = useHistory();

  const editExercise = async () => {
    const editedExercise = { name, reps, weight, unit, date };
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify(editedExercise),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      alert('Exercise edited successfully!');
    } else {
      alert('Failed to edit exercise. Please try again.');
    }
    history.push('/');
  };

  return (
    <div>
      <h1 className='heading'>Exercise Tracker</h1>
      <Navigation />
      <h3>Edit Exercise</h3>
      <div className='input-form'>
        <div className='input-column-r-align'>
          <div className='padding'>Name:</div>
          <div className='padding'>Reps:</div>
          <div className='padding'>Weight:</div>
          <div className='padding'>Unit:</div>
          <div className='padding'>Date:</div>
        </div>
        <div className='input-column-l-align'>
          <input className='padding' type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <input className='padding' type='number' value={reps} onChange={(e) => setReps(e.target.value)} />
          <input className='padding' type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
          <select className='padding' value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value='lbs'>lbs</option>
            <option value='kgs'>kgs</option>
          </select>
          <input className='padding' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div className='padding'>
        <button type='submit' onClick={editExercise}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditPage;
