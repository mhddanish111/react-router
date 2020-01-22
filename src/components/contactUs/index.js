import React,{Component} from 'react'
import {connect} from 'react-redux';

class ContactUs extends Component {
   constructor(){
       super();
       this.state={}
   }
   render(){
       return (<div>
           <h1>{this.props.contactUs.title}</h1>
       </div>)
   }
}

const mapStateToProps = state => {
    return {contactUs:state.contactUs || {}}
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps,mapDispatchToProps)(ContactUs);