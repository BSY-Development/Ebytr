import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../Styles/list.css';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');
socket.emit('');

function List() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3001/list');
      const content = await response.json();
      setData(content);
    };

    getData();

    socket.on('updateData', (content) => {
      setData(content);
    });
  }, []);

  const handleClick = async () => {
    const obj = { title: value, status: 'Pendente', date: new Date() };
    await fetch('http://localhost:3001/list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });
    socket.emit('update');
    setValue('');
  };

  const sortMethod = (a, b) => {
    if (a[sortBy] > b[sortBy]) return 1;
    if (b[sortBy] > a[sortBy]) return -1;

    return 0;
  };

  if(!data.length) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='create-div'>
          <h2>Create new</h2>
          <input
            className='create-input'
            type="text"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
          />
          <button type="button" className='btn-update' onClick={ handleClick }>Add</button>
        </div>
      </div>
    );
  }

  return (
    <div className='list-main'>
      <div className='order-div'>
        <h2>Order by:</h2>
        <input
          type="radio"
          id="title"
          name="sort"
          value="title"
          onClick={ () => setSortBy('title') }
        />
        <label htmlFor="title">Title</label>

        <input
          type="radio"
          id="status"
          name="sort"
          value="status"
          onClick={ () => setSortBy('status') }
        />
        <label htmlFor="status">Status</label>

        <input
          type="radio"
          id="date"
          name="sort"
          value="date"
          onClick={ () => setSortBy('date') }
        />
        <label htmlFor="date">Date</label>
      </div>
      <ul>
        { data.sort(sortMethod).map((item, i) => <li key={ i } id={ item._id }>
          <Card content={ item } />
        </li>) }
      </ul>
      <div className='create-div'>
        <h2>Create new</h2>
        <input
          className='create-input'
          type="text"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button type="button" className='btn-update' onClick={ handleClick }>Add</button>
      </div>
    </div>
  );
}

export default List;
