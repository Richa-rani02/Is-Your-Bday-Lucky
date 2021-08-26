var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkBtn = document.querySelector("#check-btn");
var resultTxt = document.querySelector("#result");
var sadimg = document.querySelector("#sadimg");
var happyimg = document.querySelector("#happyimg");

hide(sadimg);
hide(happyimg);



function show(input, typ) {
    input.style.display = typ;
}

function hide(input) {
    input.style.display = "none";
}

checkBtn.addEventListener("click", function validate() {

    var s = sum(birthDate.value);
    if (s % (luckyNumber.value) === 0) {
        resultTxt.innerText = "Your birthday is luckyy";
        show(happyimg, "block");
        hide(sadimg);


    } else {
        resultTxt.innerText = "Your birthday is not that luckyy";
        show(sadimg, "block");
        hide(happyimg);

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