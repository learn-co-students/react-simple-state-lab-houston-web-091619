import React, { Component } from 'react';

export default class Cell extends Component{
    constructor(props) {
        super()
        this.state = {
            color: props.value
        } 
        console.log(this.props)// ...define initial state with a key of 'color' set to the 'value' prop
      }

      changeColor = () => {
        this.setState({
          color: '#333'
        })
      }

      render() {

        return (
          <div className= "cell" 
                style= {{backgroundColor: this.state.color}} 
                onClick= {this.changeColor}>
          </div>
        )
      }

}