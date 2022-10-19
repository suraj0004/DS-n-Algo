class TrieNode {
  constructor() {
    this.children = {};
    /**
     * a : new TrieNode()
     * b : new TrieNode()
     */
  }

  insertChar(char) {
    if (!this.children.hasOwnProperty(char)) {
      this.children[char] = new TrieNode();
    }
    return this.children[char];
  }

  insertTerminatingNode() {
    this.children["*"] = new TerminatingTrieNode();
  }

  hasChild(char){
    return this.children.hasOwnProperty(char)
  }

  getChild(char){
    return this.children[char];
  }

  hasTerminationNode(){
    return this.children.hasOwnProperty("*")
  }
}

class TerminatingTrieNode extends TrieNode {
  constructor() {
    super();
  }
}

class Trie {
  constructor() {
    this.root = new TerminatingTrieNode();
  }

  insert(word) {
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
      parent = parent.insertChar(word[i]);
    }
    parent.insertTerminatingNode();
  }

  wordExist(word){
    let parent = this.root;
    for(let i = 0; i < word.length; i++){
        if(!parent.hasChild(word[i])){
            return false;
        }
        parent = parent.getChild(word[i])
    }

    return parent.hasTerminationNode();
  }

  checkPrefix(prefix){
    let parent = this.root;
    for(let i = 0; i < prefix.length; i++){
        if(!parent.hasChild(prefix[i])){
            return false;
        }
        parent = parent.getChild(prefix[i])
    }
    return true;
  }
}

function main() {
  const trie = new Trie();
  trie.insert("suraj");
  trie.insert("shivam");
  trie.insert("nupur");
  trie.insert("honey");
  trie.insert("noes");
  trie.insert("hores");
  trie.insert("sun");
  trie.insert("suri");
  trie.insert("surajupp");

  console.clear();
  console.log( trie.wordExist('su') );
  console.log( trie.checkPrefix('su') );
}

main();
