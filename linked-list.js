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
            if (!current_node) {
                throw new Error("The linked list does not contain that many items.")
            }
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
                if (current_node.data.localeCompare(data) === 0) {
                    return current_index
                } else {
                    current_index++;
                    current_node = current_node.next
                } 
            }
            while(current_node.next)
        }
        return null
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
console.log(list.at(3))
console.log(list.getTail())
console.log(list.getTail())
console.log(list.find("Last"))
console.log(list.pop())


