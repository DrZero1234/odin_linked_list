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
                current_node = current_node.next;
                current_index++;
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
console.log(`At 3: ${list.at(3).data}`)
console.log(`At 1: ${list.at(1).data}`)
console.log(`At 2: ${list.at(2).data}`)
console.log(`At 0: ${list.at(15)}`)
console.log(list.getTail())
console.log(list.find("Last"))
console.log(list.find("First"))
list.toString()

blank_list.toString()


