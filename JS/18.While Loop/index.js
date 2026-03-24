let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Your Username: ");
    password = window.prompt("Your Password: ");

    if(username == "Aryan" && password=="kushwaha@1234"){
        loggedIn=true;
        console.log("Successfully Logged In.....");
    }
    else{
        console.log("Invalid Cradentials! Please try again....");
    }
}

