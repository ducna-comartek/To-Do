
//Floating Point
const a = 0.2
const b = 0.1
let c = a + b
console.log(c)

//handler floating point
console.log(Math.floor(c))
console.log(Math.trunc(c))
console.log(Math.round(c))
console.log(Math.ceil(c)) //làm tròn lên


//null và underfined

const test
console.log(test) //undefined means a variable declared, but no value has been assigned a value.
const test1 = null // null in JavaScript is an assignment value
console.log(test1)

console.log(typeof(test)) // type of underfined is undefined
console.log(typeof(test1)) // type of null is object

//compare object

const user = {name : "duc", age : 18}
const user1 = {name: "duc", age : 18}

if(JSON.stringify(user) === JSON.stringify(user1)){
    console.log(true)
}
console.log(JSON.stringify(user))
console.log(user)

// for nhanh nhất, nhưng kém về khả năng đọc.
// foreach nhanh chóng, kiểm soát thuộc tính lặp lại.
// for...of chậm, nhưng ngọt ngào hơn.
// for...in chậm, ít tiện dụng.

console.time()
for(let i = 0; i< 1000000; i++){

}
console.timeEnd()
