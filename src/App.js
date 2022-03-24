import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [content, setContent] = useState("Test");
  useEffect(() => {
    console.log("Use Effect has work now ");
    fetch("http://localhost:1337/api/test-single-type")
      .then(res => res.json())
      .then(data => setContent(data.data.attributes))
      .then(console.log(content)); 
  },[])
  return (
    <div className="App">
      <h1>{content.name}</h1>
    </div>
  );
}

export default App;
