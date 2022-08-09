class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let current_node = this.head;
            while(current_node.next) {
                current_node = current_node.next
            }
            current_node.next = node
        }
        this.size++;
        return this;
    }

    prepend(node) {
        if (this.head) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
        return this;
    }

    getSize() {
        return this.size
    }

    getHead() {
        return this.head
    }

    getTail() {
        if (!this.head) {
            return null
        } else {
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
            if (index > this.getSize() -1) {
                return null
            } else {
            let current_index = 0;
            while (current_index < index) {
                current_index++;
                current_node = current_node.next;
            }
        }

        return current_node
        }
    }

    pop() {
        if (this.head) {
            let current_node = this.head;
            while (current_node.next) {
                if (current_node.next === this.getTail()) {
                    const return_value = this.getTail()
                    current_node.next = null
                    return return_value
                }
                current_node = current_node.next
            }
        }

    }

    find(data) {
        if (this.head) {
            let current_node = this.head;
            let current_index = 0;

            do {
                if (current_node.data === data) {
                    return current_index
                }
                current_index++;
                current_node = current_node.next 
            }
            while(current_index < this.getSize())
        }
        return null
    }

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
            listString += " null"
            console.log(listString)
        }
        else {
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
        this.size++;
        console.log(`Previous: ${previous_node}`);
        console.log(`Next: ${next_node}`);





    }



    removeAt(value, index) {

    };

    
}

function Node(data) {
    data = data;
    next = null;


    return {data,next};
}

blank_list = new linkedList

list = new linkedList();
let n = Node("value");
let first = Node("First")
let test = Node("Test");
let last = Node("Last")

list.append(n)
list.append(test)
list.prepend(first)
list.append(last)



console.log(list)
console.log(list.getSize())
console.log(list.at(15))
console.log(list.getTail())
console.log(list.find("Last"))
console.log(list.find("First"))
list.toString()
list.insertAt("kek",6)
list.insertAt("mid", 3)
list.insertAt("negative",-12)
list.insertAt("last insert", 6)
list.insertAt("First insert", -10)


blank_list.append(Node("lel"))
blank_list.insertAt("new node",-12);
console.log(blank_list)
