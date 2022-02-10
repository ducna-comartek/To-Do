const axios = require('axios') //khai bao axios de dung

//let + const
//es5 bien var truy cap duoc o ngoai vong lap
for(var i = 0; i < 5; i++){
    console.log(i)
}
console.log(i) // i = 5
//es6  bien let khong truy cap duoc o ngoai vong lap
for(let i = 0; i < 5; i++){
    console.log(i)
}
console.log(i) // i = undefined
//const trong es6 khai bao hang so khong the gan gia tri moi cho bien const
const PI = 3.14
console.log(PI)
// PI = 7.5 //wrong
// console.log(PI) // khong the thay doi bien constant

//const khong the thay doi gia tri tuy nhien constant thay doi duoc thuoc tinh cua object
const object1 = {
    name : "Duc",
    age : 23
}
console.log(object1.name)
object1.name = "Nguyen Anh Duc"
console.log(object1.name)

//constant co the thay doi phan tu trong mang

const arr1 = [1,2,3,4,5]
console.log(arr1)
arr1[0] = 0
console.log(arr1)

//template literals

//Nó giúp chúng ta có thể nhúng các biến hoặc biểu thức vào một chuỗi tại bất kỳ vị trí nào mà không gặp bất kỳ rắc rối nào

//Chuoi nhieu dong
var str = 'chuoi nhieu \n\t' +
    'dong!'//es5
let str1 = `chuoi nhieu
    dong!`//es6
console.log(str)
console.log(str1)

//gan bien vao bieu thuc
let a = 1
let b = 2
let result = `tong cua ${a} va ${b} la : ${a+b}.`
console.log(result) // es6

var a1 = 1
var b1 = 2
var result1 = 'tong cua ' +a+ 'va ' +b+ 'la :' +(a+b)+'.'
console.log(result1) // es5


//Gia tri mac dinh cho tham so
function sayHello(name = "CAD"){
    var name = name
    return `Xin Chao ${name}!`
}
console.log(sayHello())
console.log(sayHello("Nguyen Anh Duc"))

//arrow function
//Arrow Function là một tính năng thú vị khác trong ES6.
//Nó cung cấp cú pháp ngắn gọn hơn để viết biểu thức hàm bằng cách bỏ đi từ khóa function và return

function hello(name){
    console.log("hello", name)
}
hello()

//voi arrow function
hello1 = name => {
    console.log("hello", name)
}

double  = x  => x * 2 //return with arrow function
// function double(x){
//     return x*2
// }

//Ngoài ra, ta còn sử dụng được arrow function trong trường hợp: map, filter, forEach,...

//---------Promise, Async and Await---------------------------
//Promise:
// Pending (đang xử lý)
// Fulfilled (đã hoàn thành)
// Rejected (đã bị từ chối)

let promise = new Promise(
    function(resolve, rejected){
        //logic
        //thanh cong : then()
        //that bai : catch()
        // resolve()
        rejected("Loi")
    }
)

promise.then(function(){
    console.log("Thanh cong")
}).catch(function(err){
    console.log( err)
})

//-----------async and await----------------------
//Async - khai báo một hàm bất đồng bộ (async function someName(){...}).
//Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ()

const getOngCad =async (name) => {
    return name
}

const testSpeed = async() => {
    const personA = await getOngCad("a")
    const personB = await getOngCad("b")
    const personC = await getOngCad("c")
    return [personA, personB, personC]
}

const testSpeed1 = async() => {
    const personA =  getOngCad("a")
    const personB =  getOngCad("b")
    const personC =  getOngCad("c")
    const arr = await Promise.all([personA, personB, personC])//cach nay cham hon nhieu voi case 1
    return arr
}

console.time("test")
testSpeed().then(arr =>{
    console.log(arr);
    console.timeEnd("test")
})

console.time("test1")
testSpeed1().then(arr =>{
    console.log(arr);
    console.timeEnd("test1")
})


//---------axios-----------
//Axios là một Promise (lời hứa)
//Axios co the get api ve va xu ly tuong tu fetch (2 lan promise) con axios khong can den 2 lan promise
const getBreeds = async () => {
    try {
      return await axios.get('https://dog.ceo/api/breeds/list/all')
    } catch (error) {
      console.error(error)
    }
  }
  
  const countBreeds = async () => {
    const breeds = await getBreeds() // doi ham getBreeds() chay xong
  
    if (breeds.data.message) {
      console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
  }
  
countBreeds()

  //----destructuring ------- phan ra

const arr = [1,2,3]
// const a11 = arr[0]
// const b22 = arr[1]
// const c33 = arr[2]
const [a2,b2,c2] = arr // destructuring

console.log(a2,b2,c2)

const desTest = {
    name : "Duc",
    age : 19,
    ao : {
        price : 190000
    }
}
const {name: cad,ao:{price}} = desTest
console.log(cad)
console.log(price)


//default, rest, spread
//Rest khi su dung voi detructuring
//Spread khi truyen doi so

function spreadTest({name,age,...rest}){ //rest
    console.log(name),
    console.log(price),
    console.log(rest)
}
spreadTest({
    name : "CAD",
    age : 23,
    conlai : "nhieu thu"
})

const arr4 = [1,2,3,4]
const arr41 = [5,6,7,8]
const arrMerge = [...arr4, ...arr41] //spread
console.log(arrMerge)

//enhanced object literals
//dinh nghia key, value cho object
//dinh nghia method cho object
//dinh nghia key cho object duoi dang bien

let nameTest = "CAD"
let ageTest = 19

const cadTest ={
    nameTest,
    ageTest,
    getName() {
        return nameTest
    }
}
console.log(cadTest)


//Class

// function Course(name, price){
//     this.name = name,
//     this.price = price
// }

class Course{
    constructor(name, price){
        this.name = name
        this.price = price
    }
}//class nay giong voi function o tren

const phpCourse = new Course('PHP', 1000)
const jsCourse = new Course('js', 200000)

console.log(phpCourse)
console.log(jsCourse)