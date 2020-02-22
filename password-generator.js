function changeVocals (str) {
    //code di sini
    var temp = ''
    var check = ''
    var letter = ''
    var vocal = 'aiueoAIUEO'
    var subsLetter = 'bjvfpBJVFP'
    for (i = 0; i < str.length; i ++) {
        for (j = 0; j < vocal.length; j++) {
            if (vocal[j] === str[i]) {
                check = 'yes'
                letter = subsLetter[j]
                j = vocal.length
            } else {
                check = 'no'
            }
        }
        if (check == 'yes') {
            temp += letter 
        } else {
            temp += str[i]
        }
    }
    return temp
}

function reverseWord(str) {
    var temp = ''
    for (k = 1; k <= str.length; k++) {
        temp += str[str.length - k]
    }
    return temp
}

function setLowerUpperCase(str) {
    var thePassword = ''
    var lowDict = 'abcdefghijklmnopqrstuvwxyz'
    for (m = 0; m < str.length; m++) {
        var uppDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (n = 0; n < lowDict.length; n++) {
            if (lowDict[n] === str[m]) {
                thePassword += uppDict[n]
            } else if (uppDict[n] === str[m]) {
                thePassword += lowDict[n]
            }
        }
    }
    return thePassword
}

function removeSpace(str) {
    var temp = ''
    for (l = 0; l < str.length; l++) {
        if (str[l] !== ' ') {
            temp += str[l]
        }
    }
    return temp
}

function passwordGenerator (name) {
    //code di sini
    if (name.length > 4) {
        var vocalHasChanged = changeVocals(name)
        var wordHasReversed = reverseWord(vocalHasChanged)
        var subsCamelCase = setLowerUpperCase(wordHasReversed)
        var wordUnspace = removeSpace(subsCamelCase)
        return wordUnspace
    } else {
        var message = "Minimal karakter yang diinputkan adalah 5 karakter"
        return message
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
