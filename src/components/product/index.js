import React,{Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Product extends Component {
   constructor(){
       super();
       this.state={}
   }
   render(){
       const {product} = this.props;
       return (<div>
            <h1>{product.title}</h1>
            <ul>
                {product.productData && product.productData.map((item,index)=>{
                return <li key={index}><Link to={`/product-details/${item.id}`}>{item.name}</Link></li>
                })}
            </ul>
       </div>)
   }
}

const mapStateToProps = state =>{
    return {product: state.product}
}

const mapDispatchToProps = dispatch =>{
  return 
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);