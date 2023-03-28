//Usando ES6

//1.
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));

//2.
function duplicateArray(array) {
    return array.map(item => item * 2);
}

console.log(duplicateArray([1, 2, 3]));

//3.
function filterOdds(array) {
    return array.filter(item => item % 2 !== 0);
}

console.log(filterOdds([1, 2, 3, 4, 5, 6]));

//4.
function joinArrays(arrayOne, arrayTwo) {
    return [...arrayOne, ...arrayTwo]
}

console.log(joinArrays([1, 2, 3], [4, 5, 6]))

//5.

const user = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua A",
        numero: 123
    }
}

const { nome, idade, endereco: { rua, numero } } = user

console.log(`${nome} ${idade} ${rua}`)

//6.

function userData({ nome, idade }) {
    return `${nome} ${idade}`
}

console.log(userData(user))

//7.

function spreadArray(array) {
    return [...array, 6]
}

console.log(spreadArray([1, 2, 3, 4, 5], 6))

//8.

function destructuringArray(array) {
    const [first, second, ...rest] = array
    return `${first} ${second} ${rest}`
}

console.log(destructuringArray([1, 2, 3, 4, 5]))




