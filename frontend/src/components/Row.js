import React from 'react';
import DeleteEntry from './DeleteEntry';
import EditEntry from './EditEntry';

function Row({ exercise, onDelete, onEdit }) {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <EditEntry exercise={exercise} onEdit={onEdit} />
      <DeleteEntry _id={exercise._id} onDelete={onDelete} />
    </tr>
  );
}

export default Row;
