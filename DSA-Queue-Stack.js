class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
        this.length = 0
    }

    push(data) {
        // if stack empty, place on top of stack
        if (this.top === null) {
            this.top = new _Node(data, null)
            this.length += 1
            return this.top
        }

        // if stack already has something
        // create a new node
        // add data to the new node
        // have pointer point to the top
        const node = new _Node(data, this.top)
        this.length += 1
        this.top = node
    }

    pop() {
        // remove from the top
        // pointer points to next item
        // next item becomes top of the stack

        const node = this.top
        this.top = node.next
        this.length -= 1
        return node.data
    }
}

class Queue {
    constructor() {
        this.pushStack = new Stack()
        this.popStack = new Stack()
        this.size = 0
    }

    enqueue(value) {
        this.pushStack.push(value)
        this.size = this.pushStack.length + this.popStack.length
    }

    dequeue() {
        if (this.popStack.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1
            return this.popStack.pop()
        }

        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }

        this.size = this.pushStack.length + this.popStack.length -1
        return this.popStack.pop()
    }
}

module.exports = Queue 



let starTrek = new Queue()

function main() {
    starTrek.enqueue('Kirk')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.enqueue('Sulu')
    starTrek.enqueue('Checkov')
    // starTrek.dequeue()
    // starTrek.dequeue()
    // starTrek.dequeue()
    // starTrek.dequeue()
    // starTrek.dequeue()
}

main()



function peek(queue) {
    return queue.pushStack.top
}

console.log(peek(starTrek))



function isEmpty(queue) {
    if (!queue.pushStack.top) {
        return true
    }
    return false
}

console.log(isEmpty(starTrek))



function display(queue) {
    let currNode = queue.pushStack.top

    while (currNode !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}

display(starTrek)