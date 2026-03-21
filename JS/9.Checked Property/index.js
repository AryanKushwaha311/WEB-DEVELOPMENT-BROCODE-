const subscribe = document.getElementById("myCheckBox");
const visa = document.getElementById("myVisa");
const mastercard = document.getElementById("myMastercard");
const paypal = document.getElementById("myPaypal");
const submit = document.getElementById("mySubmitBtn");

const subResult = document.getElementById("subResult");
const cardsResult = document.getElementById("cardsResult");

submit.onclick=function(){
    if(subscribe.checked){
        subResult.textContent="you are a subscriber";
    }
    else{
        subResult.textContent="you are not a subscriber";
    }

    if(visa.checked){
        cardsResult.textContent="You are paying with Visa";
    }
    else if(mastercard.checked){
        cardsResult.textContent="You are paying with mastercard";
    }
    else if(paypal.checked){
       cardsResult.textContent="You are paying with Paypal";
    }

    else{
        cardsResult.textContent="You must select a payment type"
    }
}
