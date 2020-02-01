import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
onChange(event){
console.log(event.target.value)
}

  render(){
  
  const list = [
    'Item1',
    'Item2',
    'Another item'
  ]

  return (

    <div className="App">
      
    {
      list.map(item => {
        return(
        <div onClick={this.onClick}>{item}</div>
        )
      })
    }

<input onChange = {this.onChange}/>

    </div>
  );
}
}
export default App;
