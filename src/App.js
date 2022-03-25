import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [content,setContent] = useState([]); 
  const [customers, setCustomers] = useState([]);

  // Use Effect to fetch data from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setContent(json))
      .then(console.log(content))
  }, []);
  

  // Use Effect to fetch data from my strapi API
  useEffect(() => {
    fetch('https://mo-strapi-playground.herokuapp.com/customers')
    .then(res => res.json())
    .then(json => setCustomers(json))
    .then(console.log(customers))
  },[])

  return ( 
    <div className="App">
      This is the App
      {/* {content.map(post  => {
        return (
          <div key={post.id}>
            <p className='title'>{post.title}</p>
            <p className='body'>{post.body}</p>
          </div>
        )
      })} */}
    </div>
  );
}

export default App;
