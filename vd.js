// function callApi(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve('Got Data')
//         },1000)
//     })
// }

// callApi().then((data)=> console.log(data))

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