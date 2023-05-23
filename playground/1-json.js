const fs = require('fs')
//
// const book = {
//     name: "John",
//     planet: "Doe",
//     age: 27,
// }
//
// const bookJson = JSON.stringify(book)
//  fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.age = 27
data.name = 'Donny'
data.name = 'Donny'
data.planet = 'Earth'
fs.writeFileSync('1-json.json', JSON.stringify(data))






