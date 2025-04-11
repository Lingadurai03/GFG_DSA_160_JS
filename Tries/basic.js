// Implement tries

class TreeNode {
  constructor() {
    this.children = new Array(26);
    this.endOfWord = false;
  }
}

class Tries {
  constructor() {
    this.root = new TreeNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      let index = char.charCodeAt(0) - 'a'.charCodeAt();
      if (!node.children[index]) {
        node.children[index] = new TreeNode();
      }
      node = node.children[index];
    }
    node.endOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!node.children[index]) return false;
      node = node.children[index];
    }
    return node.endOfWord;
  }
  startsWith(word) {
    let node = this.root;
    for (let char of word) {
      let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!node.children[index]) return false;
      node = node.children[index];
    }
    return true;
  }
}

const trie = new Tries();

// Insert words
trie.insert('tree');
trie.insert('trie');
trie.insert('apple');
console.log(trie);
console.log(trie.search('tree')); // true
console.log(trie.search('trees')); // false
console.log(trie.startsWith('tr')); // true
console.log(trie.startsWith('app')); // true
console.log(trie.startsWith('apx')); // false
