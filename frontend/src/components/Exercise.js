import React from 'react';
import { RiDeleteBin5Fill, RiEdit2Fill } from 'react-icons/ri';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td class="control"><RiDeleteBin5Fill onClick={() => onDelete(exercise._id)} /></td>
            <td class="control"><RiEdit2Fill onClick={() => onEdit(exercise)} /></td>
        </tr>
    );
}

export default Exercise;