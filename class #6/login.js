users = [
    {
        name: "Mustafa", 
        pass: 123456
    },
    {
        name: "Ali", 
        pass: 123456
    },
    {
        name: "Ahmed", 
        pass: 789000
    },
]

function addUser(user1, pass1){
    data = {
        name: user1, 
        pass: pass1
    }
    users.push(data)
    console.log("New user added.");
}

function getUser(){
    console.log("\n------- All Users List --------");
    users.forEach(user => {
        console.log(user);
    });
}

function login(user1, pass1){
    console.log("\n******** login ***************");
    temp = [
        {
            name: false, 
            pass: false
        }
    ]
    users.forEach((user, i) => {
        if (user.name == user1) {
            if (user.pass == pass1) {
                temp[0].pass = true;                
            }
            temp[0].name = true;
        }
    });
    // foreach end

    if (temp[0].name === true) {
        if (temp[0].pass === true) {
            console.log("User login successfully.\n");

        } else {
            console.log("User password not match.\n");
        }
        
    } else {
        console.log("User name not match.\n"); 
    }

}

addUser("Hasan", 89200)
addUser("Khan", 123820)
getUser()  
login("Khan", 123820)