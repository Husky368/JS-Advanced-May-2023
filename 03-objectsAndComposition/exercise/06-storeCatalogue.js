function storeCatalogue(array) {
    let result = {};
    for (const line of array) {
        let firstLetter = line[0];
        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }
        result[firstLetter].push(line);
    }
    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))
    for (const line of sorted) {
        let letter = line[0];
        let value = line[1];
        value = value.sort((a, b) => a.localeCompare(b));
        console.log(letter)
        for (const info of value) {
            let arr = info.split(' : ')
            console.log(`  ${arr[0]}: ${arr[1]}`)
        }
    }
}
