// Even Odd program

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element % 2 == 0) console.log(element + " => Even");
//     else console.log(element + " => Odd");
// }
    

// Math
// console.log(Math.pow(2, 3));
// console.log(2**3);

// console.log(Math.sqrt(4));
// console.log(Math.ceil(15.001))
// console.log(Math.floor(15.001))
// console.log(Math.random() );
console.log(Math.ceil (Math.random() * 10) + 5 );


objP = {
    name: "Mustafa", 
}
// objC: {
//     name: "Ali", class: 2
// }
objP.roll = 150
objP.class = "11"
console.log(objP);
// objP.name = "Ali"
// console.log(objP);
delete objP.name
console.log(objP);

// console.log(Object.values(objP));
// console.log(Object.hasOwnProperty.call(objP, "age"));

// console.log(objP["name"]);

// for (key in objP) {
//     // console.log(key);
//     if (Object.hasOwnProperty.call(objP, key)) {
//         const element = objP[key];
//         console.log(element);
//     }
// }