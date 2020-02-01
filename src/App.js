import React, {Component} from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'hi'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: 'aksdfj'
    });
  }
  
  render(){
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
      
        <div onClick={this.onClick}>click here</div>
      
        <MyComponent
        title='im passing this from app.js to MyComponent.js'
        />
    </div>
    );
  }
}

export default App;
