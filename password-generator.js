/*
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi 
    huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan 
di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    //code di sini
    // var kamus = 'abcdefghijklmnopqrstuvwxyz'
    // var vocalDict = 'aiueo'
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
    // var str = changeVocals(str)
    var newWord = ''
    for (i = 1; i <= str.length; i++) {
        newWord += str[str.length - i]
    } 
    return newWord
}

function setLowerUpperCase (str) {
    //code di sini
    // var str = reverseWord(str)
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
    // var str = setLowerUpperCase(str)
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