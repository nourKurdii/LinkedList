import { Node } from "./Node.js";

// Define a DoublyLinkedList class to represent the list itself
export class DoublyLinkedList {
    constructor() {
        this.head = null;   // Reference to the first node in the list
        this.tail = null;   // Reference to the last node in the list
        this.length = 0;
    }

    // Append a new node with the given value to the end of the list
    push(value) {
        const newNode = new Node(value);  // Create a new node with the given value
        if (!this.head) {
            // If the list is empty, set the head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the end of the list and update the tail reference
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    // Remove the tail of the list
    pop() {
        // If the list is empty, return error
        if (!this.tail) {
            throw new Error('List is empty');
        }
        else {
            // If the list has only one node set head and tail to null 
            const value = this.tail.value;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                // Otherwise, set the previous node to the tail as new tail 
                const newTail = this.tail.prev;
                newTail.next = null;
                this.tail = newTail;

            }
            this.length--;
            return value;
        }

    }

    // Remove the Head of the list
    shift() {
        // if list is empty return error
        if (!this.head) {
            throw new Error('list is empty')
        }
        else {
            const value = this.head.val;
            // if list has only one node set the tail and head to null
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                // Otherwise, set the node after the head as the new head and remove the head
                const newHead = this.head.next;
                newHead.prev = null;
                this.head = newHead;
            }
            this.length--;
            return value;

        }

    }

    // The unshift method takes a value as a parameter and assigns it as the head of the list 
    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            // If the list is empty, set the head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the beginning of the list and update the head reference
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            newNode.prev = null;
        }
        this.length++;

    }

    // The get method takes an index number as a parameter and returns the value of the node at that index
    get(index) {
        // throw an error if the index is out of range
        if (index < 0 || index >= this.length) {
            throw new Error('index out of range')
        }
        else {
            // otherwise, traverse the list to find the node were 
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentNode && currentIndex !== index) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            if (currentNode == null) {
                throw new Error('index not found')
            }
            return currentNode.value
        }

    }

    // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index, val) {
        if (index < 0 || index >= this.length) {
            throw new Error('index out of range')
        }
        else {
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentNode && currentIndex !== index) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            if (currentNode == null) {
                throw new Error('index not found')
            }
            currentNode.value = val;
        }
    }

    // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list. It returns true on successful insert or false
    insert(index, val) {
        if (index < 0 || index > this.length) {
            throw new Error('index out of range')
        }
        else {
            const newNode = new Node(val);
            // inserting at the begining
            if (index === 0) {


                if (!this.head) {
                    // If the list is empty, set the head and tail to the new node
                    this.head = newNode;
                    this.tail = newNode;
                }
                else { // if the list has head put the new node as the new head 
                    newNode.next = this.head;
                    this.head.prev = newNode;
                    this.head = newNode;
                }

            }
            // inserting at the end of the list set the node as the new tail
            else if (index === this.length) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode
            }
            // inserting between existing nodes
            else {
                let currentNode = this.head;
                let currentIndex = 0;

                while (currentNode && currentIndex !== index) {
                    currentNode = currentNode.next;
                    currentIndex++;
                }
                if (currentNode == null) {
                    throw new Error('index not found')
                }
                newNode.prev = currentNode.prev;
                newNode.next = currentNode;
                currentNode.prev.next = newNode;
                currentNode.prev = newNode;
            }
            this.length++;

        }
    }


    // The remove method takes an index number as a parameter and removes the node at the given index in the list
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('index out of range')
        } else if (!this.head) {
            return;
        }
        else {
            // removing the head
            if (index === 0) {
                this.head = this.head.next;
                if (!this.head) {
                    this.tail = null;
                }
                else {
                    this.head.prev = null;
                }
            }
            else if (index === this.length - 1) { // Removing the tail
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            else {
                let currentNode = this.head;
                let currentIndex = 0;
                while (currentNode.next && currentIndex !== index) {
                    currentNode = currentNode.next;
                    currentIndex++;
                }

                if (currentNode == null) {
                    throw new Error('index not found')
                }
                else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
            }

            this.length--;

        }


    }

    printList() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" <-> "));
    }
    
}
