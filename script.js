/*Find product Function*/
function findProduct(arr){
    let result = []
    arr.map((val, index)=>{
        let container = 1
        let container2 = 1
        if(index !== arr.length){
            let sliced_arr = arr.splice(index+1, arr.length)
            sliced_arr.map((val2, index2)=>{
                container*=val2
                if(sliced_arr.length==index2+1){
                    result.push(container)
                }
                
            })
        }else{
            let sliced_arr2 = arr.splice(index, arr.length-1)
            sliced_arr2.map((val3, index3)=>{
                container2*=val3
                if(sliced_arr2.length==index3+1){
                    result.push(container2)
                }
                
            })
           
        }
    })
    return result
}
let array = [1, 2, 3, 4]
console.log(findProduct(array))


/* Merge Element Function */

function mergeElement(ar, ar1) {
    let sortArray1 = ar.sort((a,b) => a-b);
    let sortArray2 = ar1.sort((a,b) => a-b)

    let totalArray = sortArray1.concat(sortArray2)
    return totalArray.sort((a,b) => a-b);
}
console.log(mergeElement([1, 2, 4, 5, 10, 6, 3 ], [0, 8, 19, 90, 11, 16, 13 ]))