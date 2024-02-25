import React, { useState, useEffect } from 'react';

const Test = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('savedList')) || [];
    setList(savedList); 
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...list, inputValue];
    setList(updatedList);
    localStorage.setItem('savedList', JSON.stringify(updatedList)); // Store the entire list
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Save</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
