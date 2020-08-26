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
    event.preventDefault();
    const binarySearchAlgorithm = (intArr,key, start = null, end = null, count = 0) => {
        count++;

        start = start === null ? 0 : start;
        end = end === null ? intArr.length : end;
      
        if(start > end){
          return `Function rand ${count} number of times but returned nothing.`;
        }
      
        let currentInx = Math.floor((start + end) / 2);
        let currentEle = intArr[currentInx];
      
        if (currentEle === key){
          return count;
        }
        else if(currentEle < key){
          return binarySearchAlgorithm(intArr , key , currentInx + 1 , end, count);
        }else if (currentEle > key){
          return binarySearchAlgorithm(intArr , key , start , currentInx - 1, count);
        }
        return count;
      };
      
      let {store} = this.state

      store = store.intArr.sort ((a,b) => a-b)

      const result = binarySearchAlgorithm(store, this.state.binaryInput)
      this.setState ({value: result})
      console.log(result)

}

linSearch = ev => {
  ev.preventDefault();
  const {intArr} = this.state.store
  const x = (int) =>{
     for(let i = 0 ; i < intArr.length ; i++ ){
       console.log(intArr[i]);
       if(intArr[i] === Number(this.state.linearInput) ) return i+1 ;
       if(i === intArr.length - 1 ){
       return `ran ${i} number of times but nothing was found`
      }
    }
  }

  const res = x(this.state.linearInput)
  this.setState({
    value : res,
    linearInput : ''            
  })

}

render (){
    return(
        <div>
            <div>{this.state.value && this.state.value}</div>
            <IntTextBox
                search ={this.search}
                linSearch = {this.linSearch}
                binaryInput={this.handleBinaryInputChange}
                linearInput={this.handleLinearInputChange}
                state={this.state}
            />
        </div>
    )
}
}
