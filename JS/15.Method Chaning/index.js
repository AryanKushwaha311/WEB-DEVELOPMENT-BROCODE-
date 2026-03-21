
// No Method Chaining



// username = username.trim();

// let letter = username.charAt(0);
// letter=letter.toUpperCase()

// let remLetter= username.slice(1);
// remLetter=remLetter.toLowerCase();

// username = letter + remLetter;

// console.log(username);


// Method Chaining
let username = window.prompt("what is your username?");

username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLocaleLowerCase();

console.log(username);
