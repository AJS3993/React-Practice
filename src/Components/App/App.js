import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import './App.css';


class App extends Component {
  

  render(){
    return (
      <div className="App"> 
      
      <NavBar />

      <Section />

    </div>
    );
  }
}

export default App;
