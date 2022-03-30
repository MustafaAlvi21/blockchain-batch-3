class student {
    constructor(name = "Mustafa", id = 216){
        this.name = name;
        this.id = id;
    }

    Name(){
        console.log(this.name);
        console.log(this.id);
    }
}

class student123 {
    constructor(name = "Mustafa", id = 216){
        this.name = name;
        this.id = id;
    }

    getName(){
        console.log(this.name);
        console.log(this.id);
    }
}


// module.exports = {
//     student,
//     student123
// };
module.exports = student123