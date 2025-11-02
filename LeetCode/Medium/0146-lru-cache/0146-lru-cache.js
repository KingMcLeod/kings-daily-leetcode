class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
 class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // key: Node
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);

        // Remove from Linked List
        node.prev.next = node.next;
        node.next.prev = node.prev;

        // Add to the front
        this.#moveToFront(node);
        return node.val;
    }

    #moveToFront(node) {
        const firstNode = this.head.next;
        node.prev = this.head;
        node.next = firstNode;
        this.head.next = node; 
        firstNode.prev = node;
    }

    put(key, val) {
        if (this.map.has(key)) {
            // Node does exist
            const node = this.map.get(key);
            node.val = val;
            // this.map.set(key, val);

            
            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.#moveToFront(node);
        } else {
            // Node doesn't exist
            const node = new Node(key, val);
            this.map.set(key, node);
            this.#moveToFront(node);
        }
        // Check for capacity
        while (this.map.size > this.capacity) {
            const node = this.tail.prev;
            this.tail.prev = node.prev;
            node.prev.next = node.next;

            node.prev = null;
            node.next = null; 
            this.map.delete(node.key);
        }
    }
};