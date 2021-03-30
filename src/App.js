import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Navbar from './Navbar/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Projects from './Projects/Projects';
import MySkills from './MySkills/MySkills';
import './App.css'
class App extends React.Component {


  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar ></Navbar>
        <Route path='/myprojects' exact component={Projects}></Route>
        <Route path='/' exact component={AboutMe}></Route>
        <Route path='/myskills' exact component={MySkills}></Route>
      </div>
      </BrowserRouter>
      
    );

  }
  
}

export default App;
