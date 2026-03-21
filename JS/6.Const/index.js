// let x = 34;
// x=45;
// console.log(x);

const PI = 3.14;
let radius;
let circumfrance;

document.getElementById("mybutton").onclick=function(){
    radius=document.getElementById("mytext").value;
    circumfrance=2*PI*radius;
    document.getElementById("result").textContent=circumfrance;
}

