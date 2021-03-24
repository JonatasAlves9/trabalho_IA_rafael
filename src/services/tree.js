const tree = {};

function insert(tree, value) {
  if (tree.value) {
    if (value > tree.value) {
      insert(tree.right, value)
    } else {
      insert(tree.left, value)
    }
  } else {
    tree.value = value
    tree.right = {}
    tree.left = {}
  }
}

export default insert;
