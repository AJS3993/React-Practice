import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.nameInput.value, this.priceInput.value);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Add Product</h3>
                <input ref={nameInput => this.nameInput = nameInput}/>
                <input ref={priceInput => this.priceInput = priceInput}/>
                <button>Add</button>
                <hr />
            </form>
        )
    }
}

export default AddItem;