import './App.css';
import React  from 'react';
import Profile from './Profile';

function App() {

  const handleName=(Fullname)=> {

    (alert(`Welcome to ${Fullname} blog`))

  }

  return (

    <div className="App">

      <Profile handleName={handleName} Fullname="ANONYME" Bio=" Welcome to the " Profession=" Full Stack JS Developper BOOTCAMP " />
      
    </div>
  );
}

export default App;