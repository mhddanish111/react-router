import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class MenuBar extends Component {
   constructor(){
       super();
       this.state={}
   }
   render(){
       return ( <div className="topnav">
       <Link to={'/'}>Home</Link>
       <Link to={"/product"}>Product</Link>
       <Link to={"/about-us"}>About US</Link>
       <Link to={"/contact-us"}>Contact US</Link>
   </div>)
   }
}

export default MenuBar;