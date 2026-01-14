/**
 * @param {number} k
 */

 class MyCircularQueue {
    constructor(k) {
        // max capacity of the queue
        this.k = k;

        // fixed-size array to store elements
        // size never changes
        this.queue = new Array(k);

        // pointer to the front element
        // -1 means the queue is empty
        this.front = -1;

        // pointer to the rear element
        // -1 means the queue is empty
        this.rear = -1;
    }

    Front() {
        // if queue is empty, there is no front
        if (this.front === -1) {
            return -1;
        }

        // return the element at the front index
        return this.queue[this.front];
    }

    Rear() {
        // if queue is empty, there is no rear
        if (this.rear === -1) {
            return -1;
        }

        // return the element at the rear index
        return this.queue[this.rear];
    }

    enQueue(value) {
        // if the queue is full, we cannot add
        if (this.isFull()) {
            return false;
        }

        // if queue is empty, this is the first element
        if (this.isEmpty()) {
            // initialize both pointers
            this.front = 0;
            this.rear = 0;

            // insert the value at rear
            this.queue[this.rear] = value;
        } else {
            // move rear forward in a circular manner
            this.rear = (this.rear + 1) % this.k;

            // insert the value at the new rear position
            this.queue[this.rear] = value;
        }

        return true;
    }

    deQueue() {
        // if the queue is empty, nothing to remove
        if (this.isEmpty()) {
            return false;
        }

        // if there is only one element left
        if (this.front === this.rear) {
            // removing it makes the queue empty
            this.front = -1;
            this.rear = -1;
        } else {
            // move front forward in a circular manner
            this.front = (this.front + 1) % this.k;
        }

        return true;
    }

    isEmpty() {
        // queue is empty when front is -1
        return this.front === -1;
    }

    isFull() {
        // calculate where rear would move next
        const nextRear = (this.rear + 1) % this.k;

        // if next rear collides with front, queue is full
        return this.front === nextRear;
    }
}