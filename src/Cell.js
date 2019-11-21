import React, { Component } from 'react'

export default class Cell extends Component{ // iis a correctly defined and exported React component

    constructor(props) {
        super(props)
        this.state = { //state.color is initially set to the 'value' prop passed from Matrix
            color: this.props.value // has a state key of 'color'
        }
     }

    changeColor=()=>{ //has an event listener that, when clicked, calls this.setState()
        this.setState({
            color: '#333' //has an event listener that, when clicked, sets state's 'color' key to a value of '#333'
        })
    }

      

    render(){ //which renders a <div> with a className of 'cell'
        return(
          <div className="cell" style={ 
              {backgroundColor: this.state.color} //sets the <div>'s inline style attribute to 'style={{backgroundColor: this.state.color}}'
              } onClick= {this.changeColor}></div> //has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)
        )
    }
}