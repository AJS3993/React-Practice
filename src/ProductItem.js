import React, {Component} from 'react';

class ProductItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEdit: false
        }

        this.onDelete = this.onDelete.bind(this)
        this.onEdit = this.onEdit.bind(this)
    }

onDelete(){
    const {onDelete,name}=this.props
    onDelete(name)
}

onEdit(){
    this.setState({isEdit: true})
}

    render(){
        const {name, price}=this.props
        return(
            <div>
                {
                    this.state.isEdit 
                    ?(
                        <div>
                            <input ref={nameInput => this.nameInput = nameInput}/>
                            <input ref={priceInput => this.priceInput = priceInput}/>
                            <button>Save</button>
                        </div>
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