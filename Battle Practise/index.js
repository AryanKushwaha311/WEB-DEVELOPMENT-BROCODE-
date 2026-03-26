const roll = document.getElementById("btn-1");
const number = document.getElementById("number");

roll.onclick=function(){
    let randomNum = Math.floor(Math.random() * 6) + 1;
    number.textContent = randomNum;
}