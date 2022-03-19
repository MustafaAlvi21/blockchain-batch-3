// ---------------------
// F U N C T I O N S    |
// ---------------------

function getValue(param1, param2, type) {
    if (type === "+") {
        sum(param1, param2)
        
    } else if(type === "-") {
        sub(param1, param2)

    } else {
        console.log("Invalid type");
    }
}

function sum(p1, p2) {
    let result = p1 + p2;
    console.log("Sum is => " + result);
}

function sub(p1, p2) {
    let result = p1 - p2;
    console.log("Sub is => " + result);
}

getValue(100, 80, "+")
getValue(100, 80, "-")
getValue(100, 80, "*")