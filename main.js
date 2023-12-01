import { DoublyLinkedList } from './LinkedList.js';
const myList = new DoublyLinkedList();

myList.push(10);
myList.push(20); 
myList.push(30);
myList.printList(); // Output: 10 <-> 20 <-> 30

myList.pop();
myList.printList(); // Output: 10 <-> 20

myList.push(40)

//remove the head
myList.shift(); 
myList.printList(); // Output: 20 <-> 40

//add from front
myList.unshift(50);
myList.printList(); // Output: 50 <-> 20 <-> 40

console.log(`${myList.get(2)}`) // 40

myList.set(0,10)
myList.printList(); // Output: 10 <-> 20 <-> 40


myList.insert(1,50)
myList.printList(); // Output: 50 <-> 10 <-> 20 <-> 40

myList.remove(1)
myList.printList(); // Output: 50 <-> 20 <-> 40