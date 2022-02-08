function printElement(arr, index){
    if(index < 0 || index >= arr.length){
        return
    }
    // n = arr.length
    printElement(arr, index +1)
    console.log(arr[index])
}

arr = [0,1,2,3,4]
printElement(arr,0)
console.log(99999999999999999999)