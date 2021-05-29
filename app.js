var btntranslate = document.querySelector("#btn-translate");

var textarea = document.querySelector("#txt-input");
console.log(textarea);

  btntranslate.addEventListener("click", function clickeventhandler() {
    console.log("clicked")

    console.log("input", textarea.value);
});

