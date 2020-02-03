import React, {Component} from 'react';

class ProductItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEdit: false
        }

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEdit.bind(this);
    }

onDelete(){
    const {onDelete,name}=this.props
    onDelete(name)
}

onEdit(){
    this.setState({isEdit: true})
}

onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value);
}

    render(){
        const {name, price}=this.props
        return(
            <div>
                {
                    this.state.isEdit 
                    ?(
                        <form onSubmit={this.onEditSubmit}>
                            <input ref={nameInput => this.nameInput = nameInput} value={name}/>
                            <input ref={priceInput => this.priceInput = priceInput} value={price}/>
                            <button>Save</button>
                        </form>
                    )
                    :(
                        <div>
                            <span>{name}</span>|
                            <span>{price}</span>|
                            <button onClick = {this.onEdit}>Edit</button>|
                            <button onClick = {this.onDelete}>Delete</button> 
                        </div>               
                    )
                }
            </div>
        ); 
    }
}
export default ProductItem;