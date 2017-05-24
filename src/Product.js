import React, { Component } from "react";
import axios from "axios";

class Product extends Component {

constructor(props){
  super(props)
  this.state ={
    product: {}
  }
}

componentDidMount(){
  axios.get("https://practiceapi.devmountain.com/products/" + this.props.match.params.id)
  .then(response => {
    this.setState({
      product: response.data
    })
  })
}

  render(){
    var {product} = this.state;

    return(
      <div className="">
    <img className="hat" src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <h2>Price: ${product.price}</h2>
      <h3>{product.desc}</h3>
      <h2> my products</h2>
    </div>

    )
  }
}

export default Product
