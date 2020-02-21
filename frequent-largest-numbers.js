function sorting(arrNumber) {
    // code di sini
    for(i = 0; i < arrNumber.length; i++) {
        for (j = 0; j < i; j++) {
            if (arrNumber[j] < arrNumber[i]) {
                var temp = arrNumber[j]
				arrNumber[j]= arrNumber[i] 
				arrNumber[i] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length !== 0) {
        // var arrNumber = sorting(arrNumber)
        var count = 0
        for (i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] === arrNumber[0]) {
                count += 1
            }
        }
        var result = `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${count} kali`
        return result
    } else {
        var errorMessage = ''
        return errorMessage
    }
}

function mostFrequentarrNumberbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentarrNumberbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentarrNumberbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentarrNumberbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentarrNumberbers([]));
//''

// console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));
