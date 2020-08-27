const BinarySearchTree = require('../../helpers/binary_search_tree/binarySearchTree');
const { STORE } = require('../../helpers/store/store');

const {log} = STORE;


const makeTree = () => {
  const tree = new BinarySearchTree;

  for(let i=0 ; i<STORE.treeArray.length ; i++){
    tree.insert(STORE.treeArray[i]);
  }
  return tree; 
};


// log(makeTree());

const postOrder =(tree, res=[])=>{
    
  if(tree.left) postOrder(tree.left, res);
  
  if(tree.right) postOrder(tree.right, res);
  
  res.push(tree.key);
  return res;
};

log(postOrder(makeTree()),'post_order');


const inOrder =(tree, res=[])=>{
  if(tree.left) inOrder(tree.left, res);
  
  res.push(tree.key);
  
  if(tree.right) inOrder(tree.right, res);
  
  return res;
};

log(inOrder(makeTree()),'in_order');


const preOrder =(tree, res=[])=>{
  res.push(tree.key);
  if(tree.left) preOrder(tree.left, res);
  
  if(tree.right) preOrder(tree.right, res);
  
  return res;
};

log(preOrder(makeTree()),'pre_order');