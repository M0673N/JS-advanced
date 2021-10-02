class List {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    add(num) {
        this.items.push(num);
        this.items.sort((a, b) => a - b);
        this.size += 1;
    }

    remove(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            this.size -= 1;
        }
    }

    get(index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
    }
}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
// console.log(list.size)