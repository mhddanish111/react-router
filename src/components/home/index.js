import React,{Component} from 'react'
import {connect } from 'react-redux';

class Home extends Component {
   constructor(props){
       super(props);
       this.state={}
   }
   componentDidMount(){
       console.log("Home Page = ", this.props);
   }
   render(){
       console.log(this.props);
       return (<div>
           <h1>{this.props.home.title}</h1>
       </div>)
   }
}

const mapStateToProps = state =>{
    return {home:state.home || {}} 
}
const mapDispatchToProps = dispatch =>{

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);