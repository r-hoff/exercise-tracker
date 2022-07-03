import React from 'react';
import Row from '../components/Row';

function Table({ exercises, onDelete, onEdit }) {
  return (
    <div>
      <table>
        <caption>Exercise Log</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, i) => (
            <Row exercise={exercise} onDelete={onDelete} onEdit={onEdit} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
