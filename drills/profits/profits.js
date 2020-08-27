const {STORE} =require('../../helpers/store/store');

const {log} = STORE;

const profitsCal = arr =>{
  const pro = [];
  for(let i=0; i<arr.length ; i++){
    log(`arr[i] = ${arr[i]}, arr[i+1] = ${arr[i+1]}`);
    if(arr[i+1]) pro.push(arr[i] - arr[i+1]);
  }
  log(pro)
  return pro.sort((a,b) => a-b)[pro.length - 1];
};

log(profitsCal(STORE.tradeWeek));