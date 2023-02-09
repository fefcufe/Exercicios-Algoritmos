function contamination(text, char){
    contaminationResult = ''
    for (let i = 0; i < text.length; i++) {
        contaminationResult += char
    }
    return console.log(contaminationResult)
}

contamination('ola', 'z')

// soluções alternativas
// usando repeat()

function contamination2(text, char){
    return console.log(char.repeat(text.length))
}

// usando replace()
function contamination3(text, char){
    return console.log(text.replace(/./g, char))
}
contamination2('ola', 'z')
contamination3('ola', 'z')