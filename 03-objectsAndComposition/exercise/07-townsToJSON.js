function townsToJSON(input){
    let result = [];
    for (let index = 1; index < input.length; index++) {
        let line = input[index]
        let [town,latitude,longitude] = line.split(' | ');
        town = town.slice(2)
        longitude = longitude.split(' ');
        longitude = Number(longitude[0]).toFixed(2)
        latitude = Number(latitude).toFixed(2)
        let obj = {
            Town : town,
            Latitude: Number(latitude) ,
            Longitude: Number(longitude)
        };
        result.push(obj)
    }
    console.log(JSON.stringify(result))
}
