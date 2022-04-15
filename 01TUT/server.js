// console.log('Hello world')
const os=require('os')
const path=require('path')
///////////////////////
//const math=require('./math')
//console.log(math.add(4,3))
//////////////////////////
const {add,subt,multiply,divide}=require('./math')
console.log(add(4,3))
console.log(subt(4,3))
console.log(multiply(4,3))
console.log(divide(4,3))


// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))