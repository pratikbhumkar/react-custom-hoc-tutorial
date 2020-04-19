import React from 'react';
import CustomButton from './CustomButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CustomButton disabled={true}/>
      </header>
    </div>
  );
}

export default App;
