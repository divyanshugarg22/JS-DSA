class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head != null) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  printList(){
    let temp = this.head;
    while(temp!=null){
        console.log(temp.value)
        temp = temp.next
    }
  }
  pop(){
    if (this.length === 0) return undefined;
    let temp = this.head;
    let prev = this.head;
    while(temp!=null){
        prev = temp
        temp = temp.next
    }
    this.tail = prev
    this.tail.next = null;
    this.length--
    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }
    return temp;
  }


}
