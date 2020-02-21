function changeVocals (str) {
    //code di sini
    var newWord = ''
    var huruf = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            huruf = 'b'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'i') {
            huruf = 'j'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'u') {
            huruf = 'v'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'e') {
            huruf = 'f'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'o') {
            huruf = 'p'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'A') {
            huruf = 'B'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'I') {
            huruf = 'J'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'U') {
            huruf = 'V'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'E') {
            huruf = 'F'
            newWord += huruf
            huruf = ''
        } else if (str[i] == 'O') {
            huruf = 'P'
            newWord += huruf
            huruf = ''
        } else {
            newWord += str[i]
        }

    }
    return newWord
}

function reverseWord (str) {
    //code di sini
    var newWord = ''
    for (i = 1; i <= str.length; i++) {
        newWord += str[str.length - i]
    } 
    return newWord
}

function setLowerUpperCase (str) {
    //code di sini
    var arrKalimat = []
    for (i = 0; i < str.length; i++) {
        arrKalimat.push(str[i])
    }
    
    var lowerDict = 'abcdefghijklmnopqrstuvwxyz '
    var upperDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    
    for (i = 0; i < arrKalimat.length; i++) {
        for (j = 0; j < lowerDict.length; j++)
        if (arrKalimat[i] == lowerDict[j]) {
            arrKalimat[i] = upperDict[j]
        } else if (str[i] == upperDict[j]) {
            arrKalimat[i] = lowerDict[j]
        }
    }
    
    var newKalimat = ''
    for (k = 0; k < arrKalimat.length; k++) {
        newKalimat += arrKalimat[k]
    }
    return newKalimat

}

function removeSpaces (str) {
    //code di sini
    var newWord = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newWord += str[i]
        }
    }
    return newWord

}

function passwordGenerator (name) {
    //code di sini
    if (name.length > 4) {
        var vocalHasChanged = changeVocals(name)
        var wordHasReversed = reverseWord(vocalHasChanged)
        var lowerUpper = setLowerUpperCase(wordHasReversed)
        var hasil = removeSpaces(lowerUpper)
        return hasil
    } else {
        var message = "Minimal karakter yang diinputkan adalah 5 karakter"
        return message
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'