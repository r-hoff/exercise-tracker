import React from 'react';
import { FiEdit } from 'react-icons/fi';

function EditEntry({ exercise, onEdit }) {
  return (
    <td>
      <FiEdit onClick={() => onEdit(exercise)} />
    </td>
  );
}

export default EditEntry;
