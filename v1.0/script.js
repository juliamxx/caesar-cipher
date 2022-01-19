var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
var encrypt = document.querySelector('#encrypt');
var decrypt = document.querySelector('#decrypt');

function convert()
{
    var shift = document.querySelector('#shift');
    var alphabetLength = 26;
    var shiftNum = shift.value % alphabetLength;

    outputText.value = '';
    
    for (const character of inputText.value) {
        let charCode = character.charCodeAt();

        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
            if (encrypt.checked) {
                outputText.value += String.fromCharCode(charCode + shiftNum);
            } else {
                outputText.value += String.fromCharCode(charCode - shiftNum);
            }
        } else {
            outputText.value += character;
        }
    }
}

function copyText()
{
    navigator.clipboard.writeText(outputText.value).then(function() {
        alert("Copied to clipboard!");
    }, function() {
        alert("Error copying to clipboard");
    });
}

function clearText()
{
    inputText.value = '';
    outputText.value = '';
}

function changeMode()
{
    let inputTextTitle = document.querySelector('#input-text-title');
    let outputTextTitle = document.querySelector('#output-text-title');

    let enter = document.querySelector('#enter-btn');

    if (encrypt.checked) {
        inputTextTitle.innerText = "Plaintext";
        outputTextTitle.innerText = "Cyphertext";
        enter.innerText = "Encrypt";

    } else {
        inputTextTitle.innerText = "Cyphertext";
        outputTextTitle.innerText = "Plaintext";
        enter.innerText = "Decrypt";
    }
}