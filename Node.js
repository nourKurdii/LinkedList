// Define a Node class to represent each node in the doubly linked list
export class Node {
    constructor(value) {
        this.value = value;   // Value stored in the node
        this.prev = null;   // Reference to the previous node in the list
        this.next = null;   // Reference to the next node in the list
    }
}