import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Table from '../components/Table';
import Navigation from '../components/Navigation';

function HomePage({ setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);
  const history = useHistory();

  const onDelete = async (_id) => {
    const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
    if (response.status === 204) {
      setExercises(exercises.filter((e) => e._id !== _id));
    } else {
      console.error();
    }
  };

  const onEdit = (exercise) => {
    setExerciseToEdit(exercise);
    history.push('/edit-exercise');
  };

  const loadExercises = async () => {
    const response = await fetch('/exercises', { method: 'GET' });
    const exercises = await response.json();
    setExercises(exercises);
  };

  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <div className='home'>
      <h1 className='heading'>Exercise Tracker</h1>
      <Navigation />
      <Table exercises={exercises} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default HomePage;
