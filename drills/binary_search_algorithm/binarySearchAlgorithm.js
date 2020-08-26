const {STORE} = require('../../helpers/store/store');

const {log} = STORE;

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

log(binarySearchAlgorithm(STORE.intArr ,16));

module.exports = {binarySearchAlgorithm};
