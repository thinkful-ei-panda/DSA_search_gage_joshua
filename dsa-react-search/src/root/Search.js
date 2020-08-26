import React from 'react';
import IntTextBox from '../components/IntTextBox';
import STORE from '../store/store'

export default class Search extends React.Component{

state = {
    value: null,
    store: STORE,
    linearInput: '',
    binaryInput: ''
}

handleBinaryInputChange = event => {
    event.preventDefault();
    this.setState({binaryInput: event.target.value})
    // console.log(event.target.value)
};

handleLinearInputChange = event => {
    event.preventDefault();
    this.setState({linearInput: event.target.value})
};

search = event => {
    const binarySearchAlgorithm = (intArr,key, start = null, end = null) => {
        start = start === null ? 0 : start;
        end = end === null ? intArr.length : end;
      
        if(start > end){
          return -1;
        }
      
        let currentInx = Math.floor((start + end) / 2);
        let currentEle = intArr[currentInx];
      
        if (currentEle === key){
          return currentInx;
        }
        else if(currentEle < key){
          return binarySearchAlgorithm(intArr , key , currentInx + 1 , end);
        }else if (currentEle > key){
          return binarySearchAlgorithm(intArr , key , start , currentInx - 1);
        }
        return currentInx;
      };

      this.setState({
          store: this.state.store.sort((a,b) => a-b)
        })
        const {binary_search_input, linear_search_input} = event.target;
      const result = binarySearchAlgorithm(this.state.store, event.value)
      this.setState ({value: result})
}

render (){
    return(
        <div>
            <div>{this.state.component && this.state.result}</div>
            <IntTextBox
                search =
                {this.search}
                binaryInput={this.handleBinaryInputChange}
                linearInput={this.handleLinearInputChange}
                state={this.state}
            />
        </div>
    )
}
}
