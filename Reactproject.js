import axios from 'axios'
import React, { Component } from 'react'

export class Reactproject extends Component {
  state={id:"",
errormsg:""}
  eventChange=(event)=>{this.setState({name:event.target.value})}
  axiosSubmit=(even)=>
  {
    even.preventDefault();
    const user={name:this.state.id}
    axios.delete(`https://jsonplaceholder.typicode.com/users/ ${this.state.id}`)
    .then(res=>{
      console.log(res.data)
    })
    .catch(error=>{console.log(error)
    this.setState({errormsg:"i am error"})})
  }
  render()
  {
    return(
      <><form onSubmit={this.axiosSubmit}>
        enter the name to be deleted<br/>
        <input type="text" onChange={this.eventChange}/><br/>
        <button type="Submit">Submit</button></form>
        {this.state.errormsg ?<div>{this.state.errormsg}</div>:""}
        </>
    )
  }
}

export default Reactproject