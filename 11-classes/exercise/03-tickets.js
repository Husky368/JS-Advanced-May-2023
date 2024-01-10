function tickets(destinationsInfoArr, sortBy) {
    class Ticket {
    constructor(_destinationInfo) {
        this.destination = _destinationInfo[0];
        this.price = Number(_destinationInfo[1]);
        this.status = _destinationInfo[2];
        }
    }
    let splittedArr = [];
    let sortedArr = [];
    let resultArr = [];

    for (let destinationInfo of destinationsInfoArr) {
        let [destination, price, status] = destinationInfo.split('|');
        splittedArr.push([destination, price, status])
    }
    if (sortBy == 'destination') {
        sortedArr = splittedArr.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (sortBy == 'price') {
        sortedArr = splittedArr.sort((a, b) => Number(a[1]) - Number(b[1]));
    } else {
        sortedArr = splittedArr.sort((a, b) => a[2].localeCompare(b[2]));
    }

    for (let destinationInfo of sortedArr) {
        let obj = new Ticket(destinationInfo)
        resultArr.push(obj)
    }
    return resultArr
}
