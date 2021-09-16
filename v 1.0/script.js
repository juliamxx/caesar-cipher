var alphabet = 'abcdefghijklmnopqrstuvwxyz' //valid characters to convert
var intext = document.querySelector('textarea#intext') //text to encrypt
var outtext = document.querySelector('textarea#outtext') //encrypted cipher
var shift = document.querySelector('input#shift') //shift (value to add to the position in the alphabet)

//splits the text into single characters, calls the Convert function for each of them and prints the converted characters into the outtext HTML
function Encrypt() {
    outtext.innerHTML = ''
    //check if the text is null
    if (intext.value.length == 0) {
        confirm('ERROR, enter text to encrypt')
    //call the isNumber function to check if the inserted shift is valid
    } else if (!isNumber(shift.value)) {
        confirm('ERROR, enter a valid shift')
    } else {
        var charactersArray = intext.value.split("") //create an array composed by each of the intext characters
        //call the Convert function for each of the elements in the array and set the outtext 
        for (let pos in charactersArray) {
            let character = charactersArray[pos]
            outtext.innerHTML += Convert(character, shift)
        }
    }
}

//converts each one of the characters adding the shift to their initial position in the alphabet
function Convert(_character, _shift) {
    //check if the character is in the valid alphabet
    if (inAlphabet(_character, alphabet)) {
        let positionInAlphabet = alphabet.indexOf(_character) + Number(_shift.value) //converted character position (its index in alphabet added to the shift value)
        //check if the position is a valid index in the alphabet string
        if (positionInAlphabet < alphabet.length) {
            let equivalentCharacter = alphabet[positionInAlphabet]
            return equivalentCharacter
        //if the position exceeds the alphabet lenght, go back to the start (ex: z, shift 1 = a)
        } else {
            let newPosition = positionInAlphabet - alphabet.length
            let newCharacter = alphabet[newPosition]
            return newCharacter
        }
    //repeat the character if it's not in the alphabet
    } else {
        let sameCharacter = _character
        return sameCharacter
    }
}

//checks if the character is in the valid alphabet
function inAlphabet(n, l) {
    if (l.indexOf(n) == -1) {
        return false
    } else {
        return true
    }
}

// checks if the shift is a number between 1 and 25
function isNumber(s) {
    if (Number(s) > 0 && Number(s) <= 25) {
        return true
    } else {
        return false
    }
}