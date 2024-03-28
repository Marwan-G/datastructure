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
        let temp = this.head
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

    insert = function (index, value) {
        if (index == 0) return this.unshift(value)
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false
        const newNode = new new_node(value)
        // let temp = this.head
        // for (let i = 0; i < index; i++) {
        //     temp = temp.next
        // }
        const temp = this.get(index)
        newNode.next = temp.next

        temp.next = newNode
        return true
    }
    remove = function (index) {
        if (index === 0) return this.shift();
        if (index == this.length) return this.pop()
        if (index < 0 || index >= this.length) return undefined
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    print = function () {
        let temp = this.head
        while (temp != null) {
            console.log(temp.value)
            temp = temp.next

        }
    }

}

let myLinkedlist = new Linkedlist(4)

// myLinkedlist.push(7)
// myLinkedlist.insert(1,3)
myLinkedlist.remove(1)
// myLinkedlist.remove(1)

// myLinkedlist.print()