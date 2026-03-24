function add(x,y){
    let result = x + y;
    return result;
}

function substract(x,y){
    let result = x - y;
    return result;
}

function evenOdd(x){
    return (x%2==0) ? "Even" : "Odd";
}

function checkEmail(email){
    return email.includes("@") ? "Valid" : "Invalid";
}

let result = checkEmail("aryankush50@gmail.com");
console.log(result);


