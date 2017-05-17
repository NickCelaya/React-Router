import React, {Component} from "react";
import './App.css';
import {Link} from "react-router-dom";
import axios from "axios";

class Store extends Component{

constructor(props){
  super(props)

  this.state ={
    products: []
  }
}

componentDidMount(){
  axios.get("https://practiceapi.devmountain.com/products")
  .then(response => {
    console.log(response);
    this.setState({
      products: response.data
    })
  })
}

  render() {

    var products = this.state.products.map( (product, index) => {
      return (
        <div key={index}>
          <Link to={"/product/" + product.id}>
            <h1>{product.title}</h1>
              <div></div>
              <img className="hat" src={product.image} alt={product.title}/>

          </Link>
        </div>
      )
    })

console.log(products);

    return  (
     <div className="">
       <h1>"Hi Nick this is the store page"</h1>
       {products}
     </div>
  )
 }
}

export default Store
