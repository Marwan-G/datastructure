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
    shift = function () {
        if (!this.head) return undefined
        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length--
        } else {
            let temp = this.head
            this.head = temp.next
            temp.next = null
            this.length--
            return temp
        }
    }
    // add new node infront 
    unshift = function (value) {
        const newNode = new new_node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get = function (index) {
        if (index < 0 || index > this.length) { return undefined }
        temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
    set = function (index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return True
        }
        return false
    }
}

let myLinkedlist = new Linkedlist(4)

//test my LinkedList
myLinkedlist.push(6)
myLinkedlist.unshift(1)
myLinkedlist.push(90)
myLinkedlist.unshift(4)

console.log("why", myLinkedlist)


