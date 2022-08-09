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
        let current_index = 0;
        if (this.head) {
                    let current_node = this.head;
        while (current_index < index) {
            current_node = current_node.next;
            /*
            if (!current_node) {
                throw new Error("The linked list does not contain that many items.")
            }
            */
            current_index++;
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
        if (index >= this.getSize()) {
            index = this.getSize() - 1;
        } else if (index < 0) {
            throw new Error("The index must be a positive number or 0.")
        }
        let previous_node = this.at(index-1);
        let next_node = this.at(index+1);
        console.log(`Previous: ${previous_node.data}`);
        console.log(`Next: ${next_node}`)
        let new_node = Node(value);


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
list.insertAt("kek",3)



