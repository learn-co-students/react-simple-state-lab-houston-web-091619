import React, { Component } from 'react';
import Cell from './Cell';


export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
  )
  //Once you have made your Cell component, replace the return value in genRow's map to: <Cell value={val} />. 
  // Here we are specifying our Cell component should have a value prop.


  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()} {/*/But inside that div, we invoke this.genMatrix()*/}
      </div>
    )
  }
  
}

Matrix.defaultProps = { //uses a default 'values' prop of an array with 10 items
  values: (() => { // each sub-array of the default 'values' prop is an array
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'] 
    // each sub-array of the default values prop is filled with 10 hex color string equal to: '#F00'
    return (new Array(10).fill(defRow))
  })()

}

//Make a default values prop for Matrix,
// which is a 10x10 array filled with the values '#F00' (red). For inspiration, take a look at src/data.js