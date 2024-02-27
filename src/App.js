import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import InputForm from './components/InputForm/InputForm';
import HomeTopBar from './components/HomeTopBar/HomeTopBar';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import TestComponent from './components/TestComponent/TestComponent';
import Laptops from './components/Laptops/Laptops';
import

function App() {

  const [itemList, setItemList] = useState([]);

  // const handleAddInput = (input) => {
  //   setItemList([...itemList, input]);
  //   localStorage.setItem('savedList', JSON.stringify(itemList));
  // };

  const handleAddInput = (input) => {
    setItemList(prevItemList => {
      const updatedList = [...prevItemList, input];
      localStorage.setItem('savedList', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const handleDeleteInput = (inputToDelete) => {
    setItemList(prevItemList => {
      const updatedList = prevItemList.filter(item => item !== inputToDelete);
      localStorage.setItem('savedList', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const listItems = itemList.map((item) => 
    <li key={item}>{item}</li>);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedList = localStorage.getItem('savedList');
    if (savedList) {
      setItemList(JSON.parse(savedList));
    }
  }, []);


  // useEffect()
  return (
    <div class ="page">
      {/* <InputForm onSaveInput = {handleAddInput} onDeleteInput = {handleDeleteInput} ></InputForm>
      <ul>
        {listItems}
      </ul>
      <HomeTopBar/> */}
      {/* <DragAndDrop/> */}
      {/* <TestComponent/> */}
      <Laptops/>
    </div>
  );
}

export default App;