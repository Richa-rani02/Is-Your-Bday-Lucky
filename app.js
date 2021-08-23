var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkBtn = document.querySelector("#check-btn");
var resultTxt = document.querySelector("#result");

checkBtn.addEventListener("click", function validate() {

    var s = sum(birthDate.value);
    if (s % (luckyNumber.value) === 0) {
        resultTxt.innerText = "Your birthday is luckyy🥳🥳";


    } else {
        resultTxt.innerText = "Your birthday is not that luckyy😞😞";

    }
})

function sum(inputDate) {
    inputDate = inputDate.replaceAll("-", "");
    var sum = 0;
    for (var i = 0; i < inputDate.length; i++) {
        sum = sum + Number(inputDate[i]);
    }
    return sum;
}