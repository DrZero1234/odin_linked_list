class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Adds a node to the end of the linked list
    append(node) {
        // If this is the first Node of the Linked List the head will be set to the new Node
        if (!this.head) {
            this.head = node;
        } else {
            // Sets the previous node´s next property to the new Node
            let current_node = this.head;
            while(current_node.next) {
                current_node = current_node.next
            }
            current_node.next = node
        }
        // The size increases after every new Node
        this.size++;
        return this;
    }

    // Adds a node to the start of the LinkedList
    prepend(node) {
        // If the new Node is NOT the first element the new Node´s next property is set to the LinkedList´s first element
        if (this.head) {
            node.next = this.head;
        }
        // The new head of the LinkedList is the prepended Node
        this.head = node;
        this.size++;
        return this;
    }

    // Gets the size
    getSize() {
        return this.size
    }

    // Returns the Head of the LinkedList
    getHead() {
        return this.head
    }

    // Returns the Tail(last Node) of the Linked List
    getTail() {
        // If the LinkedList is empty there is no head nor tail
        if (!this.head) {
            return null
        } else {
            // We find the last Node by iterating over the list´s Nodes and finding the one which´s next property is null
            let current_node = this.head;
            while (current_node.next) {
                current_node = current_node.next;
            } 
            return current_node
        }
    }

    at(index) {
        if (this.head) {
            let current_node = this.head;
            // We cant find the index which does not exist in the List
            if (index > this.getSize() -1) {
                return null
            } else {
            let current_index = 0;
            while (current_index < index) {
                current_index++;
                current_node = current_node.next;
            }
        }
        // Returning the node which is stored at the index
        return current_node
        }
    }


    // Removes and returns the list´s last Node
    pop() {
        if (this.head) {
            let current_node = this.head;
            while (current_node.next) {
                // We iterate until we find the last element by using the previously created .getTail() method
                if (current_node.next === this.getTail()) {
                    if (this.head === current_node) {
                        this.head = null
                        this.size--
                    }
                    const return_value = current_node
                    // The Node behind the tail will be the new tail of the list.
                    current_node.next = null
                    // Similarly to the Array .pop() method we not only remove the last Node but also return it 
                    this.size--;
                    return return_value
                }
                current_node = current_node.next
            }
        }

    }

    // Find the FIRST Node which data is equal to the parameter
    find(data) {
        if (this.head) {
            let current_node = this.head;
            let current_index = 0;

            // Iterating over the Node´s until the end of the List OR until we find the Node with the required data
            do {
                if (current_node.data === data) {
                    return current_index
                }
                current_index++;
                current_node = current_node.next 
            }
            while(current_index < this.getSize())
        }
        // If the list does not have such Node we return null.
        return null
    }

    // Prints the list out int ( Node.data ) -> ( Node.data ) -> ( Node.data ) ... -> null format.
    toString() {
        if (this.head) {
            let current_node = this.head;
            let listString = ""
            do {
                if (current_node != null) {
                    listString += `( ${current_node.data} ) ->`
                } else {
                    listString += "null"
                }
                current_node = current_node.next
            }while (current_node != null)

            // Its guaranteed that we will print null either by itself or at the end of the list
            listString += " null"
            console.log(listString)
        } else {
            console.log("null")
        }
        
    }


    insertAt(value, index) {
        let previous_node;
        let next_node;
        let new_node = Node(value)
        // If the index is 0 or less the Node will be iserted as the head of the Linked List
        if (index >= this.getSize() -1) {
            // Since the new node will be the tail of the List we set the previous tail´s previous property to the new Node
            previous_node = this.getTail();
            previous_node.next = new_node
            // The next is null since the new node is the tail
            new_node.next = null 
        // If the index is the same as the size of the Node or higher the Node will be inserted as the last Node in the linked List
        } else if (index <= 0) {
            // Same for the head we reaplace the previous head to the new node and the new node´s next property will be the previous head
            previous_node = null;
            next_node = this.head;
            this.head = new_node;
            new_node.next = next_node

        // The code to handle the in-between insertion
        } else {
            previous_node = this.at(index-1);
            next_node = this.at(index)
            previous_node.next = new_node;
            new_node.next = next_node;
        }
        // Increase the size property
        this.size++;

    }



    // THIS METHOD WONT WORK WITH EMPTY LINKED LISTS

    // Remove the NODE stored at the index
    removeAt(index) {

        // Initializing the needed variabled
        let selected_node;
        let previous_node;
        let next_node;
        // In case the index is 0 or less we not only remove the first element but change the head of the List aswell
        if (index <= 0) {
            // Select the first Node
            selected_node = this.at(0);
            next_node = selected_node.next;
            // Set the first node´s next Node as the new Head thus removing the 0 indexed Node
            this.head = next_node;
            selected_node.next = null;
        // If the index is equal to the size of the list or beyond we remove the last Node of the List
        } else if (index >= this.getSize()-1) {
            selected_node = this.at(this.size-2);
            selected_node.next = null;

        } else {
            // Get the index Node
            selected_node = this.at(index);
            previous_node = this.at(index-1);
            next_node = this.at(index+1)
            // The index node´s previous Node will jump over the index node and set the next property to the indexed Node´s next.
            previous_node.next = next_node;
            selected_node.next = null
        }

        // Decrease the size after every remove
        this.size--;
    };

    
}

function Node(data) {
    data = data;
    next = null;


    return {data,next};
}


// Creating new LinkedList

// let l = new LinkedList();

// Creating new Node

// let n = Node("my value")

