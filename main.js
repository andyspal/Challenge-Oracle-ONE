const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encryptBtn = document.querySelector(".encrypt");
const decryptBtn = document.querySelector(".decrypt");
const copyBtn = document.querySelector('.copy');
const outputContainer = document.querySelector('.output');
const outputDrawing = document.querySelector(".output-drawing");
const outputSubtitle = document.querySelector(".output-subtitle");
const outputMessage = document.querySelector(".output-message");
const copyMessage = document.querySelector('.copy-message')
encryptBtn.addEventListener("click", () => {
  if (inputText.value.trim() === "") {
    return;
  }
  outputContainer.style.justifyContent = "space-between";
  outputDrawing.style.display = "none";
  outputSubtitle.style.display = "none";
  outputMessage.style.display = "none";

  const text = inputText.value;
  const encryptedText = encrypt(text);
  outputText.innerHTML = encryptedText;

  outputText.style.display = "block";
  copyBtn.style.display = "block";
});

decryptBtn.addEventListener("click", () => {
  if (inputText.value.trim() === "") {
    return;
  }
  outputContainer.style.justifyContent = "space-between";
  outputDrawing.style.display = "none";
  outputSubtitle.style.display = "none";
  outputMessage.style.display = "none";
  const text = inputText.value;
  const decryptedText = decrypt(text);
  outputText.innerHTML = decryptedText;
  outputText.style.display = "block";
  copyBtn.style.display = "block";
});

copyBtn.addEventListener('click',() =>{
    if (outputText.value.trim() === "") {
        return;
      }
      outputText.select();
      document.execCommand('copy');
      outputText.blur()
      copyMessage.style.opacity = '1';
      setTimeout(hideMessage, 2000);
})

function encrypt(text) {
  var encrypted = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    switch (char) {
      case "a":
        encrypted += "ai";
        break;
      case "e":
        encrypted += "enter";
        break;
      case "i":
        encrypted += "imes";
        break;
      case "o":
        encrypted += "ober";
        break;
      case "u":
        encrypted += "ufat";
        break;
      default:
        encrypted += text[i];
        break;
    }
  }
  return encrypted;
}

function decrypt(text) {
    text = text.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    return text;
  }
  
function hideMessage() {
    copyMessage.style.opacity = '0';
}