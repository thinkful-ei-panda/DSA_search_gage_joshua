const {STORE} = require('../../helpers/store/store');

const {log} = STORE;

const bookFinder = (intArr,key, start = null, end = null) => {
  start = start === null ? 0 : start;
  end = end === null ? intArr.length : end;
  
  if(start > end){
    return `${key} isn't found`;
  }
  
  let currentInx = Math.floor((start + end) / 2);
  let currentEle = intArr[currentInx];
  
  if (currentEle.dewIndex === key){
    return intArr[currentInx].name;
  }
  else if(currentEle.dewIndex < key){
    return bookFinder(intArr , key , currentInx + 1 , end);
  }else if (currentEle.dewIndex > key){
    return bookFinder(intArr , key , start , currentInx - 1);
  }
  return intArr[currentInx].name;
};

log(bookFinder(STORE.bookArr, 148.2 ));