import React, {Component} from 'react';
import ProductItem from './ProductItem';
import AddItem from './AddItem';
import './App.css';

const products = [
  {
    name:'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    }

    this.onDelete = this.onDelete.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }

UNSAFE_componentWillMount(){
  const products = this.getProducts()
  this.setState({products})
}
  
  
getProducts(){  
  console.log('getProducts')
  return this.state.products;
  }

onAdd(name, price){
  const products = this.getProducts()
  products.push({name, price})
  this.setState({products})
}

onDelete(name){
  const products = this.getProducts()
  const filteredProducts = products.filter(product => {
    return product.name !==name;
  })
  this.setState({ products: filteredProducts })
}

onEditSubmit (name, price, originalName){
  console.log(name, price)
  let products = this.getProducts();

  products = products.map(product => {
    if (product.name === originalName){
      product.name = name;
      product.price = price;
    }
    return product
  });
  this.setState({ products });
}

  render(){
    return (
      <div className="App"> 
      <h1>Products Manager</h1>
      <AddItem
      onAdd={this.onAdd}
      />
      {
        this.state.products.map(product => {
          return (
            <ProductItem 
              key = {product.name}
             {...product}
              onDelete = {this.onDelete}
              onEditSubmit = {this.onEditSubmit}
            />
          )
        })
      }
    </div>
    );
  }
}

export default App;
