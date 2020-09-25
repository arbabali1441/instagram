import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
         />
      </div>  

      <h1> HELLO Arbab Ali Programmer Let's build an Instagram Clone with React! </h1>

      <Post />
      {/*post */}
      {/*post */}
    </div>
  );
}

export default App;
