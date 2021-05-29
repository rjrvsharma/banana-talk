var btntranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");

var outputdiv = document.querySelector("#output");


function clickHandler() {
  outputdiv.innerText = "sdccc " + txtinput.value ;
};

btntranslate.addEventListener("click" , clickHandler)


