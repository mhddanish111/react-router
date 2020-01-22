import React,{Component} from 'react';
import {connect} from 'react-redux';

class AboutUs extends Component {
   constructor(){
       super();
       this.state={}
   }
   render(){
       return (<div>
   <h1>{this.props.aboutUs.title}</h1>
       </div>)
   }
}

const mapStateToProps = state =>{
    return {aboutUs: state.aboutUs || {}}
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);