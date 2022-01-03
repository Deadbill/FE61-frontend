class LinkedList {
    constructor() {
        this.root = {
            data: null,
            next: null,
        };
    }

    add(valueToAdd, valueAfter) {

        if(valueToAdd === valueAfter) {
            console.log('equal arguments')
            return
        }

        let targetNode = this.find(valueAfter);
        let newNode = {
            data: valueToAdd,
            next: targetNode.next,
        };

        targetNode.next = newNode;
    }

    delete(value) {
        let nodeForDelete = this.find(value);
        let targetNode =this.root;

        while (targetNode.next !== null && targetNode.next.data !== value) {
            targetNode = targetNode.next;
        }

        targetNode.next = nodeForDelete.next;

    }

    print() {
        console.log(this.root);
    }

    append(value) {
        const node = {
            data: value,
            next: null,
        };

        let lastNode = this.root;
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
        }

        lastNode.next = node;
    }

    find(value) {
        let targetNode =this.root;

        while (targetNode.data !== value && targetNode.next !== null) {
            targetNode = targetNode.next;
        }

        return targetNode.data === value ? targetNode : null;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(21);
linkedList1.append(43);
linkedList1.append(111);
linkedList1.add(22, 21);
linkedList1.delete(111);
linkedList1.print();
console.log(linkedList1.root);