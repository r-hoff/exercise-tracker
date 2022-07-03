import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

function DeleteEntry({ _id, onDelete }) {
  return (
    <td>
      <RiDeleteBinLine className='red' onClick={() => onDelete(_id)} />
    </td>
  );
}

export default DeleteEntry;
