class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    sortList() {
        this.list = this.list.sort((a, b) => a - b);
    }
    updateSize() {
        this.size = this.list.length;
    }

    add(addNum) {
        this.list.push(addNum);
        this.updateSize();
        this.sortList();
    }
    remove(removeIndex) {
        if (removeIndex > this.list.length || removeIndex < 0) {
            return
        }
        this.list.splice(removeIndex, 1);
        this.sortList();
        this.updateSize();
    }
    get(getIndex) {
        return this.list[getIndex];
    }
    size() {
        return this.size
    }
}
