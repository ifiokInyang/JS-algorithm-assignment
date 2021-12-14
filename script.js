/*Find product Function*/

function findProduct(array) {
    let finalArray = [];
    let currentElement;
    array.forEach(element => {
        currentElement = element;
const filteredArray = array.filter((val, i) => val != currentElement)
const reducedArray = filteredArray.reduce((prev, curr) => prev * curr);
finalArray.push(reducedArray);
    });
   
  
return finalArray;
}
console.log(findProduct([1,2,3,4]))
console.log(findProduct([0,1,2,3,4]))


/* Merge Element Function */

function mergeElement(ar, ar1) {
    let sortArray1 = ar.sort((a,b) => a-b);
    let sortArray2 = ar1.sort((a,b) => a-b)

    let totalArray = sortArray1.concat(sortArray2)
    return totalArray.sort((a,b) => a-b);
}
console.log(mergeElement([1, 2, 4, 5, 10, 6, 3 ], [0, 8, 19, 90, 11, 16, 13 ]))
