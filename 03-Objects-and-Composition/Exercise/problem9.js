function createSortedList() {
    return {
        list: [],
        size: 0,
        add: function (el) {
            this.list.push(el);
            this.list.sort(((a, b) => a - b));
            this.size += 1;
        },
        remove: function (i) {
            if (0 <= i && i < this.size) {
                this.list.splice(i, 1);
                this.list.sort(((a, b) => a - b));
                this.size -= 1
            }
        },
        get: function (i) {
            if (0 <= i && i < this.size) {
                return this.list[i];
            }
        }
    }
}

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
