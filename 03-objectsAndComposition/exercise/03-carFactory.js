function carFactory(input) {
    let obj = { ...input };
    let result = {
        model: obj.model,
        engine: {
            power: undefined,
            volume: undefined,
        },
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: undefined,
    };
    //engine
    if (obj.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    }
    else if (obj.power <= 120) {
        result.engine.power = 120;
        result.engine.volume = 2400;
    }
    else {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }
    //wheelSize
    if (input.wheelsize % 2 == 0) {
        let number = input.wheelsize - 1;
        result.wheels = [number,number,number,number]
    }
    else{
        let number = input.wheelsize
        result.wheels = [number,number,number,number]
    }
    return result
} carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
// { model: 'VW Golf II',
// engine: { power: 90,volume: 1800 },
// carriage: { type: 'hatchback',color: 'blue' },
// wheels: [13, 13, 13, 13] } 
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})
// {   model: 'Opel Vectra',
//     engine: { power: 120, volume: 2400 },
//     carriage: { type: 'coupe', color: 'grey' },
//     wheels: [17, 17, 17, 17]} 
