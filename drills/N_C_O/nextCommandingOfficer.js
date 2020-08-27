const {STORE} = require('../../helpers/store/store');
const BinarySearchAlgorithm = require('../../helpers/binary_search_tree/binarySearchTree');

const {log} = STORE;


const treeOfCommand = () =>{
  const tr = new BinarySearchAlgorithm;

  for(let i=0 ; i<STORE.chainOfCommand.length ; i++){
    tr.insert(STORE.chainOfCommand[i].id,STORE.chainOfCommand[i].name);
  }
  return tr;
};

// log(treeOfCommand());



const nextCommandingOfficer = tree => {
  const fifo = [], temp = [];
  fifo.push(tree);
  while(fifo.length){
    let upX = fifo.pop();
    temp.push(upX.value);
    if (upX.right) fifo.push(upX.right);

    if (upX.left) fifo.push(upX.left);
  }
  return temp; 
};

log(nextCommandingOfficer(treeOfCommand()));