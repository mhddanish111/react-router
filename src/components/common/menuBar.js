import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class MenuBar extends Component {
   constructor(){
       super();
       this.state={}
   }
   render(){
       return ( <div className="topnav">
       <div className="link">
       <div>Use of Link</div>
       <div>The Link is used to navigate the different routes on the site</div>   
       <Link to={'/'}>Home</Link>
       <Link to={"/product"}>Product</Link>
       <Link to={"/about-us"}>About US</Link>
       <Link to={"/contact-us"}>Contact US</Link>
       </div>
       <br />  
       <div className="navLink">
       <div>Use of NavLink</div>
       <div>NavLink is used to add the style attributes to the active routes</div>
       <NavLink exact to={'/'} activeClassName="active">Home</NavLink>
       <NavLink to={"/product"} activeClassName="active">Product</NavLink>
       <NavLink to={"/about-us"} activeClassName="active">About US</NavLink>
       <NavLink to={"/contact-us"} activeClassName="active">Contact US</NavLink>
       </div> 
   </div>)
   }
}

export default MenuBar;