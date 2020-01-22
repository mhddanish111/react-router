import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
   constructor(props){
       super(props);
       this.state={productId:'',productDetails:{}}
   }
   componentDidMount(){
       const {match, product} = this.props;
      const productId = (match && match.params && match.params.id) || "";
      if(productId){
        const productDetails = product && product.productData.find(item => item.id === productId);
        this.setState({productId, productDetails})
      }
      

     
   }
   render(){
       const {productDetails} = this.state;
    console.log(this.props);
       return (<div>
       <h1>Product Details</h1>
       <div>{productDetails && productDetails.id}</div>
       <div>{productDetails && productDetails.name}</div>
       <div>{productDetails && productDetails.details}</div>
       <div>
           <Link to={'/product'}>
               <button>Back</button>
           </Link>
       </div>
       </div>)
   }
}
const mapStateToProps = state =>{
    return {product: state.product}
}

const mapDispatchToProps = dispatch =>{
     return 
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);