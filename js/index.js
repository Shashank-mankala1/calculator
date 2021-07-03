function cleartext() {
    if (document.getElementById("ans").value == "" && document.getElementById("error").textContent != "") document.getElementById("error").textContent = "";
}
setInterval(cleartext, 1000);
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}
function clearconsole() {
    console.clear();
}
function errorMessage() {
    var error = document.getElementById("error");
    if (isCharacterALetter(document.getElementById("ans").value)) {
        error.textContent = "Please enter a valid number";
        error.style.color = "red";
    } else {
        error.textContent = "";
    }
}
// function errorMessage1() {
//     var error = document.getElementById("error");
//     if (isNaN(document.getElementById("ans").value)) {
//         error.textContent = "Please enter a valid number";
//         error.style.color = "red";
//     } else {
//         error.textContent = "";
//     }
// }
function clearerror() {
    var error = document.getElementById("error");
    error.textContent = "";
    console.clear();
}