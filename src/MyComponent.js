import React, {Component} from 'react';

class MyComponent extends Component {
    render(){
        return(
            <div className='component'>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default MyComponent;