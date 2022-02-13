
//============================================================================
//Floating Point
//Là do máy tính có bộ nhớ có hạn không thể trả về output chính xác tuyệt đối
console.log(0.2+0.1) //0.30000000000000004
console.log(0.2*0.1) //0.020000000000000004
console.log(0.2/0.3) //0.6666666666666667
//Các cách khắc phục khi máy tính bị floating point:
//Có thể sử dụng các thư viện có sẵn của js như decimaljs, numeraljs,... nhưng làm hiệu suất của chường trình
//number.toFixed(a) a -> số các chữ số xuất hiện sau dầu thập phân
console.log((0.2+0.1).toFixed(1)) //0.3
console.log((0.2*0.1).toFixed(2)) //0.02
console.log((0.2/0.3).toFixed(1)) //0.7

//====================================================
//So sánh Null và Undefined
/* 
    Undefined là một biến đã được khai báo nhưng chưa được gán giá trị typeof của undefined là undefined
    Null là một giá trị gán có thể gán cho 1 biến dưới dạng không có giá trị typeof của null là 1 object
*/ 
let TestUndefined 
console.log(TestUndefined) //undefined
console.log(typeof(TestUndefined)) // kiểu undefined
let TestNull = null
console.log(TestNull) //null
console.log(typeof(TestNull)) //kiểu object

//=====================================================
//So sánh == và ===
/* 
    == là kiểu so sánh giá trị
    === là kiểu so sánh giá trị và kiểu giá trị (typeof)
*/

let TestValue = 2
let TestValue1 = '2'
console.log(TestValue == TestValue1) //true
console.log(TestValue === TestValue1) //false
console.log(TestNull == TestUndefined) //true
console.log(TestNull === TestUndefined) //false

//======================================================
//Các phương thức làm tròn số trong func Math của js
/*
    ceil : làm tròn lên
    floor : làm tròn xuống
    round : làm tròn theo số thập phân nào gần số nguyên nhất
    trunc : làm tròn theo kiểu bỏ hết phần thập phân sau dấu phẩy
*/
let TestMath = 8.79
console.log(Math.ceil(TestMath)) //9
console.log(Math.floor(TestMath)) //8
console.log(Math.round(TestMath)) //9
console.log(Math.trunc(TestMath)) //8

//=========================================================
//So sánh tốc độ các vòng lặp
/*
    -for và while là 2 vòng lặp nhanh nhất :
    Vòng lặp for++ và for-- khi lặp số lượng phần tử ít (5) thì vòng for-- nhanh hơn hẳn còn lặp số lượng nhiều(10) thì 2 vòng lặp
    tốn thời gian gần như tương đương nhau
    Vòng lặp for và while khi lặp số lượng phần tử ít thì while nhanh hơn hẳn còn khi lặp nhiều phần tử thì for vẫn nhỉnh hơn
*/
let i = 0
console.time('for++')
for(i = 0; i<5; i++){
    console.log(i)
}
console.timeEnd('for++')

console.time('for--')
for(i = 5; i>0; i--){
    console.log(i)
}
console.timeEnd('for--')

console.time('while')
while(i<5){
    console.log(i)
    i++
}
console.timeEnd('while')

//=========================================
//So sánh typeof và instanceof
/*
    -Typeof dùng khi kiểm tra phần tử đó là kiểu nguyên thuỷ (number, string, ...) trả về kiểu của phần tử đó
    -Instanceof dùng khi kiểm tra phần tử nếu giá trị là instance của class hay contructor hoặc 1 object trả về dạng boolean
*/
let ClassFirst = function() {};
let instance = new ClassFirst();
console.log(instance instanceof Object) //true
console.log(instance instanceof ClassFirst) //true
console.log(typeof(instance)) //object
console.log(typeof(ClassFirst)) //function

//==========================================
//So sánh var let const
/*
    -var : khai báo đa dạng biến, nếu khai báo trong function thì var có scope là function scope, biến var có tính chất hoisting
    (khai báo ở đâu thì biến var đều được đẩy lên đầu scope)
    -let: thay thế var vì khai báo biến let nó chỉ được truy cập trong block scope của nó tức là chỉ chỉ trong {} mới đc truy cập
    -const: block scoped trong trường hợp khai báo const với các kiểu nguyên thuỷ thì không thể thay đổi các biến đó như là hằng số PI
    trong trường hợp khai báo const với arr hoặc object thì có thể thay đổi đc .
*/
function TestKhaiBao(){
    var i1 = 0
    console.log(i1)
}
i1 = 3 // i1 không thay đổi vì trong phạm vi scope
console.log(i2)
var i2 //khai báo sau khi gọi biến i2 -> undefined
TestKhaiBao()
//với biến var thì trong phạm vi globalscope thì ngoài {} vẫn thay đổi value
var greeting = "hey hi";
var times = 4;

if (times > 3) {
    var greeting = "say Hello instead"; 
}
console.log(greeting); //"say Hello instead"
//Với biến let thì không thay đổi greeting1
let greeting1 = "hey hi";
let times1 = 4;

if (times > 3) {
    let greeting1 = "say Hello instead"; 
}
console.log(greeting1); //"hey hi"
const PI = 3.14
//PI = 3.15 //err
console.log(PI)
const HocSinh = {
    name : 'Đức',
    age : 18
}
HocSinh.name = 'Cao Anh Đức'
console.log(HocSinh)
//============================================
//So sánh tham chiều và tham trị
/* 
    Tham chiếu là 2 đối tượng cùng trỏ đến 1 vùng nhớ -> 1 đối tượng thay đổi là cả 2 đối tượng đều thay đổi,dùng gán các kiểu
    dữ liệu phức tạp như object, array, function
    Tham trị là 2 biến khác ô nhớ nhưng giống nhau value -> 1 đối tượng thay đổi đối tượng kia không thay đổi,dùng gán các kiểu
    dữ liệu nguyên thuỷ như (number,string,...)
*/
//Tham trị
let a = 1;
//Tạo ra biến a và lưu giá trị của a vào ô nhớ - 1 
let b = a;
//Tạo ra biến b, sao chép giá trị của biến a và lưu vào ô nhớ mới - 1
a = 2;
//Sửa giá trị của biến a và cập nhật lại ô nhớ - 2
console.log(b) //1
//Tham chiếu
let a1 = { name: "cat" }
//Tạo ra biến a, lưu giá trị của a vào ô nhớ và gán lại địa chỉ ô nhớ cho biến a (a = #a001)
let b1 = a1
//Tạo ra biến b và gán giá trị của biến a cho b, ở đây chính là địa chỉ địa chỉ ô nhớ của a (b =#a001)
a1.name = "dog"
//Sửa giá trị của biến a thì giá trị trong ô nhớ được cập nhật
console.log(b1) // { name: "dog" }
//=========================================================
//So sánh object
//parse sang json để tiện so sánh -> sử dụng JSON.stringify
const user22 = {name : "duc", age : 18}
const user23 = {name: "duc", age : 18}

if(JSON.stringify(user23) === JSON.stringify(user22)){
    console.log(true)
}
console.log(JSON.stringify(user22))
console.log(user22)
//==============================================
//Closures là 1 hàm bên trong mà có thể truy cập biến của hàm bên ngoài 
function showName (firstName, lastName) {
    var nameIntro = "Your name is ";
    // Đây là hàm bên trong mà có thể truy cập đến biến của hàm bên ngoài, truy cập được tham số của hàm ngoài.
    //Closures
    function makeFullName () {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName ();
}
showName("Michael", "Jackson"); // Your name is Michael Jackson
//=========================================================
//OOP với javascipt
// //class es5
// function City(name, x, y) {
//     this.name = name;
//     this.setLocation(x, y);
// }
// City.prototype.setLocation = function(x, y) { //prototype thêm thuộc tính set location cho object city
//     this.x = x;
//     this.y = y;
// }
// City.prototype.getLocation = function() { //prototype thêm thuộc tính get location cho object cit
//     return {
//         x: this.x,
//         y: this.y
//     }
// }
// City.prototype.getName = function() { // thêm thuộc tính getName()
//     return 'City("' + this.name + '")';
// }  
// const _city = new City('Hồ Chí Minh', 100, 200)
// console.log(_city.getName(), _city.getLocation())
//Với ES6
'use strict';
class City {
    constructor(name, x, y) { 
        this.name = name;
        this.setLocation(x, y);
    }
    setLocation(x, y) { 
        this.x = x;
        this.y = y;
    }
    getLocation() {
     return {
        x: this.x,
        y: this.y
    }
    }
    getName() {
     return `City is name ("${this.name}")`;
   }
}
const _city = new City('Hồ Chí Minh', 100, 200)
console.log(_city.getName(), _city.getLocation())
//OOP
//Có 3 cách kế thừa trong javascript
/* 
Kế thừa cơ bản: kế thừa các phương thức và thuộc tính của lớp cha nhưng không kế thừa prototype.
Kế thừa prototype: kế thừa các phương thức và thuộc tính của lớp cha cùng với prototype.
Kế thừa với từ khóa class và extends trong ES6: tương tự như kế thừa prototype nhưng cách viết ngắn gọn, trực quan hơn.
*/

function Animal(name){
    this.type = "Animal";
    this.name = name;
    this.sayType = function(){
        console.log("type: "+this.type)
    }
}
Animal.prototype.sayName = function(){
    console.log("name: " + this.name)
}
function Dog(name){
    this.super_ = Animal;
    this.super_.call(this, name);
    this.type = "Dog";
    this.shout = function (){
        console.log("shout: "+"Go Go Go !!!");
    }
}
function inherits(child, parent){
    child.prototype = Object.create(parent.prototype,{
        constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
        }
    })
}
inherits(Dog, Animal)
let myDog = new Dog("Rex");
myDog.shout()
myDog.sayName()
myDog.sayType()
//=============================================
//THIS
/*
    Keyword This được sử dụng để đại diện cho đối tượng chứa scope nơi gọi this
    Khai báo This ở ngoài scope thì This đại diện cho object global
    This trong hàm tạo là đại diện cho đối tượng sẽ được tạo
    This trong 1 hàm là undefined khi ở strict mode
*/
const iPhone7 = {
    name : "iPhone7plus",
    color : "black",
    weight : 300,
    takePhoto(){
        console.log('take a photo')
        console.log(this) // this o day la object iPhone7
    },
    objChild:{
        methodChild(){
            console.log(this)
        }
    }
}
console.log(iPhone7.takePhoto())
iPhone7.objChild.methodChild() //this trong objChild tro ve object con objChild
console.log(this) // global -> trả về window nếu sử dụng use strict trả về undefined
console.log('test this')
function Car(name,color){
    this.name = name,
    this.color = color
}
Car.prototype.run = function(){
    console.log(this) //this ở đây trỏ đến object của nó 
    function test(){
        console.log(this) //this ở đây là global -> window
    }
    test
}
Car.prototype.run1 = function(){
    console.log(this) //this ở đây trỏ đến object của nó 
    const test = () => {
        console.log(this) //this ở đây cũng trỏ đến object của nó trong arrow function
    }
    test()
}
const porsche = new Car('Porsche', 'yellow')
const mercedesS450 = new Car('Mercedes S450','black')
console.log(porsche.run1())
console.log(mercedesS450.run())
//bind() được dùng để xác định tham số this cho một function
function log(level, time, message) {
    console.log(level + ' - ' + time + ': ' + message);
}
  // Không có this nên set this là null
  // Set mặc định 2 tham số level và time
const logErrToday = log.bind(null, 'Error', 'Today');
// Hàm này tương ứng với log('Error', 'Today', 'Server die.')
logErrToday("Server die."); 
// Error - Today: Server die.
//call() gọi 1 hàm với giá trị của this và các đối số riêng lẻ
function greet() {
    let reply = [this.person, 'Is An Awesome', this.role].join(' ');
    console.log(reply);
}
  
const x = {
    person: 'Duc Nguyen', role: 'Javascript Developer'
};
greet.call(x); // Duc Nguyen Is An Awesome Javascript Developer
//apply() gọi 1 hàm với giá trị của this và các đối số được truyền vào dưới dạng mảng
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
//============================================================
//ES6
const axios = require('axios') //khai bao axios de dung
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
let z = 1
let c = 2
let result = `tong cua ${z} va ${c} la : ${z+c}.`
console.log(result) // es6
var z1 = 1
var c1 = 2
var result1 = 'tong cua ' +z1+ 'va ' +c1+ 'la :' +(z1+c1)+'.'
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
//Luồng đi 
/* Luồng đi:
  checkStatus()--fulfilled-->afterCheckStatusSuccessful()--fulfilled-->afterGetAPIData()
       |                                            |
       |                                            |
       rejected-->afterCheckStatusRejected()<--rejected
*/
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
//Promise all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
//promise any
const promise11 = Promise.reject(0);
const promise22 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise33 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promises4 = [promise11, promise22, promise33];
Promise.any(promises4).then((value) => console.log(value));
// expected output: "quick"
//promise race
const promise12 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
const promise21 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});
Promise.race([promise12, promise21]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});
// expected output: "two"
  

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