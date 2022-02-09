// const st1 = {
//     name : "Duc",
//     diem : 9,
//     xepHang : "Gioi"

// }
// const st2 = {
//     name : "Nam",
//     diem : 6,
//     xepHang : "Kha"
// }
// const st3 = {
//     name : "Vi",
//     diem : 3,
//     xepHang : "Trung Binh"
// }

// const a = [st1,st2,st3]

// function xepHangHocSinh(rank){
//     for(let i= 0; i < a.length; i++){
//         if(JSON.stringify(i.xepHang) == rank){
//             console.log(JSON.stringify(i))
//         }
//     }
// }

// const rank = 'Kha'

// // console.log(JSON.stringify(a))

// // st2.name = "Cao Anh Duc"
// // console.log(JSON.stringify(a))
// xepHangHocSinh(rank)



const per1 = {
    name : 'duc1'
}

const per11 = {
    name : 'duc11'
}

per1.children = per11

console.log("person1", per1)

