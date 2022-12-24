const randomNum = (num) => {
    return Math.floor(Math.random() * num)
};

const randomName = {
    firstName: ['Aeie', 'Bobby', 'Zek', 'Sam', 'Martin', 'Hanna', 'Werren', 'Gus', 'Vanny', 'Tom'],
    middleName: ['Cas', 'Randle', 'Quin', 'Tom', 'Pat', 'Maz', 'Uzi'],
    lastName: ['Dice', 'Hammer', 'Zion', 'Fas', 'Ocien', 'Grant']
};

let fullName = [];

for(let char in randomName) {
    let partOfName = randomNum(randomName[char].length) 

    switch(char) {
        case 'firstName':
            fullName.push(`Your first name is ${randomName[char][partOfName]}.`)
            break
        case 'middleName':
            fullName.push(`Your middle name is ${randomName[char][partOfName]}.`)
            break
        case 'lastName':
            fullName.push(`Your last name is ${randomName[char][partOfName]}.`)
            break
        default:
            fullName.push(`an error has occured`)
    }
}

const completeName = (fullName) => {
    const completeName = fullName.join(' ');
    console.log(completeName);
};

completeName(fullName);