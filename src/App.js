import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Navbar from './Navbar/Navbar'

class App extends React.Component {
  render()
  {
    return (
      <div className="App">
        <Navbar></Navbar>
        <AboutMe></AboutMe>
      </div>
    );

  }
  
}

export default App;
