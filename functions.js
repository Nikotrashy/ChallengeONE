const A = "ai";
const E = "enter";
const I = "imes";
const O = "ober";
const U = "ufat";

function setHidden() {
  document.getElementById("image-on-result").style.display = "none";
  document.getElementById("title-on-result").style.display = "none";
  document.getElementById("p-on-result").style.display = "none";
}

function encrypt(text) {
  let textEncrypt = Array.from(text);
  let input = document.getElementById("input-text").value;
  if (input != "") {
    for (let i = 0; i < textEncrypt.length; i++) {
      if (textEncrypt[i] == "a" || textEncrypt[i] == "A") {
        textEncrypt[i] = A;
      }
      if (textEncrypt[i] == "e" || textEncrypt[i] == "E") {
        textEncrypt[i] = E;
      }
      if (textEncrypt[i] == "i" || textEncrypt[i] == "I") {
        textEncrypt[i] = I;
      }
      if (textEncrypt[i] == "o" || textEncrypt[i] == "O") {
        textEncrypt[i] = O;
      }
      if (textEncrypt[i] == "u" || textEncrypt[i] == "U") {
        textEncrypt[i] = U;
      }
    }
    setHidden();
  } else {
    alert("Por favor ingrese un texto o frase a encriptar o desencriptar");
  }
  return (document.getElementById("text-result").value = textEncrypt
    .join("")
    .toLowerCase());
}

function decrypt(text) {
  let input = document.getElementById("input-text").value;
  if (input != "") {
    var textDecrypt = text.replace(A, "a");
    textDecrypt = textDecrypt.replace(E, "e");
    textDecrypt = textDecrypt.replace(I, "i");
    textDecrypt = textDecrypt.replace(O, "o");
    textDecrypt = textDecrypt.replace(U, "u");
    setHidden();
  } else {
    alert("Por favor ingrese un texto o frase a encriptar o desencriptar");
  }
  return (document.getElementById("text-result").value =
    textDecrypt.toLowerCase());
}

function copyText() {
  var textCopy = document.getElementById("text-result");
  textCopy.select();
  document.execCommand("copy");
  document.getElementById("text-result").style.display = "";
}
