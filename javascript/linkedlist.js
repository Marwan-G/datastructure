class new_node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor(value) {
        const newNode = new new_node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push = function (value) {
        const newNode = new new_node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this
    }
    pop = function () {
        if (this.length === 0) {
            return undefined
        } else {
            let temp = this.head
            let prev = this.head
            while (temp.next) {
                prev = temp
                temp = temp.next
            }
            this.tail = prev
            this.tail.next = null
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            console.log(length)

            return temp
        }
    }


}

let myLinkedlist = new Linkedlist(4)
myLinkedlist.pop()



