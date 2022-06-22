
import './App.css';
import React from 'react';
const {useState , useEffect} = React

function App() {
  const [name,setName] = useState("CGU")
  return (
    <h1>Hello, {name}</h1>
  );
}

export default App;
