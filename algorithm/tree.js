function Node (data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show() {
  return this.data
}
// 二叉查找树
function BST() {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
}

function insert(data) {
  var n = new Node(data, null, null)
  if (this.root == null) {
    this.root = n
  } else {
    var current = this.root
    var parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = n
          break
        }
      } else {
        current = current.right
        if (current == null) {
          parent.right = n
          break
        }
      }
    }
  }
}
// 二叉树中序遍历
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left)
    console.log(node.show() + '')
    inOrder(node.right)
  }
}
// 二叉树先序遍历
function preOrder(node) {
  if (node !== null) {
    console.log(node.show() + '')
    preOrder(node.left)
    preOrder(node.right)
  }
}
// 二叉树后续遍历
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.show() + '')
  }
} 

function getMin() {
  var current = this.root
  while (current.left !== null) {
    current = current.left
  }
  return current.data
}

function getMax() {
  var current = this.root
  while (current.right !== null) {
    current = current.right
  }
  return current.data
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);

// 树的深度优先算法的递归实现
function deepTraversal(node, nodeList) {
  // node 是根节点
  if (node) {
    nodeList.push(node)
    var children = node.children
    for (var i = 0; i < children.length; i++) {
      deepTraversal(children[i], nodeList)
    }
  }
  return nodeList
}

var deepList = deepTraversal(nums.root, [])
console.log('deepList=============', deepList)
// 树的广度优先
function wideTraversal(node) {
  var nodes = []
  if (node !== null) {
    var queue = []
    queue.unshift(node)
    while (queue.length !== 0) {
      var item = queue.shift()
      nodes.push(item)
      var children = item.children
      for (var i = 0; i < children.length; i++) {
        queue.push(children[i])
      }
    }
  }
  return nodes
}

var widthList = wideTraversal(nums.root)
console.log('widthList============', widthList)
