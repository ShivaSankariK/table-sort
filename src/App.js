import React, {use, useState} from 'react';
import TableContent from './TableContent';
import { AppContext } from './context';
import './App.css';

function App() {
const [user, setUser] = useState([]);
const [name, setName] = useState("");
const [age, setAge] = useState(0);

const handleSubmit =() => {
  const userArray = [];
  userArray.push({
    name: name,
    age: age
  });
  setUser([...user, ...userArray]);
}

  return (
    <div className="App">
      <h1>Table using context api</h1>
      <div className='wrapper'>
        <label>Name: </label>
        <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label> Age: </label>
        <input value={age} onChange={(e) => setAge(e.target.value)}/>
     
        <div><button onClick={() => handleSubmit()}>Submit</button> </div></div>
        <AppContext.Provider value={{user, setUser}}> <TableContent /></AppContext.Provider>
    </div>
  );
}

export default App;
