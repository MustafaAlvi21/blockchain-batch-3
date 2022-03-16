array1 = ["A", "B", "C", "D", "E"]
array2 = [1, 2, 3, 4, 5]

// d2Array = [
//     ["A", "B", "C", "D", "E"],   // 0
//     [1, 2, 3]              // 1
// //   0  1  2  3  4
// ]


// parent loop
// for (let i = 0; i < d2Array.length; i++) {
//     parentArray = d2Array[i];
//     // console.log("    " + parentArray);

    

//     // child loop
//     for (let j = 0; j < parentArray.length; j++) {
//         child = parentArray[j];
        
//         console.log("    " + child);
//     }

// }
// i= 0
// j = 0, 1,2,3
    // console.log(d2Array[1]);
    // console.log(d2Array[0][1]);
    // console.log(d2Array[1][2]);
    





d2Array = [
    ["A", "B", "C", "D", "E"],   // 0
    [1, 2, 3]              // 1
//   0  1  2  3  4
]
    

d2Array.forEach( (item, i) => {
    // console.log(item);
    // console.log(i);

    item.forEach((element, j) => {
        console.log(element);
        console.log(j);
    });
    console.log("----------------------");
});