import React, { useState } from "react";



function App() {
  
  const [headingText, setHeadingText] = useState('Hello');

  const [isMouseOver, setMouseOver] = useState(false);

  const [name, setName] = useState('');

  const [nameText, setNameText] = useState('');

  function handleClicked() {
    setHeadingText('Submitted');
    // event.preventDefault(); // Prevents Form's next action
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
    
  }

  function handleValue() {
    setNameText(name);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <h1>{nameText}</h1>
      {/* <form onSubmit={handleClicked}> */}
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button 
        style={{backgroundColor: isMouseOver ? 'black' : 'white' }} 
        onClick={() => {handleClicked(); handleValue();}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        value={name}
      >Submit
      </button>
      {/* </form> */}
    </div>
  );
}

export default App;
