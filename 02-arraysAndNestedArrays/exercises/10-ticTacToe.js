function ticTacToe(input) {
    //creating the initial dashboard
    let dashboard = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
    dashboard[0].fill(false, 0, 3);
    dashboard[1].fill(false, 0, 3);
    dashboard[2].fill(false, 0, 3);
    //converting the move values in proper types
    let movesArr = [];
    for (let ell of input) {
        ell = ell.split(' ');
        let currArr = [];
        currArr.push(Number(ell[0]), Number(ell[1]));
        movesArr.push(currArr);
    }
    for (let index = 0; index < movesArr.length; index++) {
        if (index % 2 == 0) {
            //X
            let moveRow = movesArr[index][0];
            let movePosition = movesArr[index][1];
            dashboard[moveRow].fill("X", movePosition, movePosition + 1)
        }
        else {
            //O
            let moveRow = movesArr[index][0];
            let movePosition = movesArr[index][1];
            dashboard[moveRow].fill("O", movePosition, movePosition + 1)
        }
        //cheking for streaks of three symbols
        //horizontal checks
        for (let i = 0; i < 3; i++) {
            let streakCheck = 1;
            let example = [i][0];
            for (let j = 1; j < 3; j++) {
                if (example == dashboard[i][j]) {
                    streakCheck++;
                }
            }
            if (streakCheck == 3) {
                //won
                return console.log(example + " won")
            }
        }
        //vertical checks
        for (let i = 0; i < 3; i++) {
            let streakCheck = 1;
            let example = [0][i];
            for (let j = 1; j < 3; j++) {
                if (example == dashboard[j][i]) {
                    streakCheck++;
                }
            }
            if (streakCheck == 3) {
                //won
                return console.log(example + " won")
            }
        }
        //diagonal checks
        let diagonalExampleOne = dashboard[0][0];
        let diagonalExampleTwo = dashboard[0][2];
        let diagonalSteake = 1;
        for (let diagonalIndex = 1; diagonalIndex < 3; diagonalIndex++) {
            for (let diagonalIndexInner = 1; diagonalIndexInner < 3; diagonalIndexInner++) {
                if (dashboard[diagonalIndex][diagonalIndexInner] == diagonalExampleOne) {
                    diagonalSteake++;
                    if (diagonalSteake == 3) {
                        //won
                        for (const ell of dashboard) {
                            console.log(ell)
                        }
                        return console.log(diagonalExampleOne + " won")
                    }
                }
            }
        }
        diagonalSteake = 1;
        for (let diagonalIndex = 1; diagonalIndex < 3; diagonalIndex++) {
            for (let diagonalIndexInner = 1; diagonalIndexInner >= 0; diagonalIndexInner--) {
                if (dashboard[diagonalIndex][diagonalIndexInner] == diagonalExampleTwo) {
                    diagonalSteake++;
                    if (diagonalSteake == 3) {
                        //won
                        for (const ell of dashboard) {
                            console.log(ell)
                        }
                        return console.log(diagonalExampleTwo + " won")
                    }
                }
            }
        }
    }
    console.log(dashboard)
} ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
)
