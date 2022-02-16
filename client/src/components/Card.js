import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/card.css';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');
socket.emit('');

function Card({ content: {title, status, date, _id: id } }) {
  const [doUpdate, setDoUpdate] = useState(false);
  const [value, setValue] = useState(title);
  const [newStatus, setNewStatus] = useState(status)

  const handleUpdate = async (id) => {
    await fetch(`http://localhost:3001/list/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: value, status: newStatus }),
    });
    setDoUpdate(false);
    socket.emit('update');
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/list/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    socket.emit('update');
  }

  if (doUpdate) {
    return (
      <div className='card-div'>
        <input type="text" value={ value } onChange={ (e) => setValue(e.target.value) } />

        <div className='radio-style'>
          <input
            type="radio"
            id="pendente"
            name="status"
            value="Pendente"
            onClick={ (e) => { setNewStatus(e.target.value) } }
            defaultChecked={ status === 'Pendente' }
          />
          <label htmlFor="pendente">Pendente</label>
        </div>

        <div className='radio-style'>
          <input
            type="radio"
            id="andamento"
            name="status"
            value="Em andamento"
            onClick={ (e) => { setNewStatus(e.target.value) } }
            defaultChecked={ status === 'Em andamento' }
          />
          <label htmlFor="andamento">Em andamento</label>
        </div>

        <div className='radio-style'>
          <input
            type="radio"
            id="pronto"
            name="status"
            value="Pronto"
            onClick={ (e) => { setNewStatus(e.target.value) } }
            defaultChecked={ status === 'Pronto' }
          />
          <label htmlFor="pronto">Pronto</label>
        </div>

        <button
          className='btn-update'
          type="button"
          onClick={ () => handleUpdate(id) }
        >
          Atualizar
        </button>
      </div>
    );
  }

  return (
    <div className='card-div'>
      <p>{ title }</p>
      <p>{ status }</p>
      <p>{ date }</p>
      <div className='button-div'>
        <button type="button" onClick={ () => handleDelete(id) }>Deletar</button>
        <button type="button" onClick={ () => setDoUpdate(true) }>Editar</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Card;
