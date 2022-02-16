/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Card({ content: {title, status, date, _id: id } }) {
  const [doUpdate, setDoUpdate] = useState(false);
  const [value, setValue] = useState(title);
  const [newStatus, setNewStatus] = useState(status)

  const handleUpdate = async (id) => {
    const dataResult = await fetch(`http://localhost:3001/list/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: value, status: newStatus }),
    });
    const response = await dataResult.json();
    console.log(response);
    setDoUpdate(false);
  }

  const handleDelete = async (id) => {
    const dataResult = await fetch(`http://localhost:3001/list/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const response = await dataResult.json();
    console.log(response);
  }
  // pendente, em andamento ou pronto
  if (doUpdate) {
    return (
      <div>
        <input type="text" value={ value } onChange={ (e) => setValue(e.target.value) } />

        <input
          type="radio"
          id="pendente"
          name="status"
          value="Pendente"
          onClick={ (e) => { setNewStatus(e.target.value) } }
          defaultChecked={ status === 'Pendente' }
        />
        <label htmlFor="pendente">Pendente</label>

        <input
          type="radio"
          id="andamento"
          name="status"
          value="Em andamento"
          onClick={ (e) => { setNewStatus(e.target.value) } }
          defaultChecked={ status === 'Em andamento' }
        />
        <label htmlFor="andamento">Em andamento</label>

        <input
          type="radio"
          id="pronto"
          name="status"
          value="Pronto"
          onClick={ (e) => { setNewStatus(e.target.value) } }
          defaultChecked={ status === 'Pronto' }
        />
        <label htmlFor="pronto">Pronto</label>

        <button type="button" onClick={ () => handleUpdate(id) }>Atualizar</button>
      </div>
    );
  }

  return (
    <div>
      <p>{ title }</p>
      <p>{ status }</p>
      <p>{ date }</p>
      <button type="button" onClick={ () => handleDelete(id) }>Deletar</button>
      <button type="button" onClick={ () => setDoUpdate(true) }>Editar</button>
    </div>
  );
}

export default Card;
