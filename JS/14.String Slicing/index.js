let email = "aryankush1212@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
// let username = email.slice(email.charAt(0),email.indexOf("@"));

console.log(username);
console.log(extension);

