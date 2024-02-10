import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import InputForm from './components/InputForm/InputForm';

function App() {

  const [itemList, setItemList] = useState([]);

  const handleAddInput = (input) => {
    setItemList([...itemList, input]);
  };

  const listItems = itemList.map((item) => 
    <li key={item}>{item}</li>);
  
  // useEffect()
  return (
    <div>
      <InputForm onSaveInput = {handleAddInput}></InputForm>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;