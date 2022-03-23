import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [content,setContent] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setContent(json))
      .then(console.log(content))
  }, []);

  return (
    <div className="App">
      This is the App
      {content.map(post  => {
        return (
          <div key={post.id}>
            <p className='title'>{post.title}</p>
            <p className='body'>{post.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
