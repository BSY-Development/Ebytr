import React, { useEffect, useState } from 'react';
import Card from './Card';

function List() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3001/list');
      const content = await response.json();
      setData(content);
    };

    getData();
  }, []);

  const handleClick = async () => {
    const obj = { title: value, status: 'Pendente', date: new Date() };
    const dataResult = await fetch('http://localhost:3001/list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });
    const response = await dataResult.json();
    console.log(response);
  };

  if(!data.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>
        { data.map((item, i) => <li key={ i } id={ item._id }>
          <Card content={ item } />
        </li>) }
      </ul>
      <div>
        <input type="text" value={ value } onChange={ (e) => setValue(e.target.value) } />
        <button type="button" onClick={ handleClick }>Add</button>
      </div>
    </div>
  );
}

export default List;
