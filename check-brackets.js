'use strict'
let str1 = '(){}[]'
let str2 = '[{()}](){}'
let str3 = '[]{()'
let str4 = '[{)]'
let str5 = '[{]}'

ckeckBrackets(str1)
ckeckBrackets(str2)
ckeckBrackets(str3)
ckeckBrackets(str4)
ckeckBrackets(str5)

function ckeckBrackets(str) {
    let valid = true
    let strArray = str.split('')
    let openBrackets = []

    function checkOpenBracket(char) {
        if ( ['(','{','['].indexOf(char) != -1 ) {
            openBrackets.push(char)
        } else {
            valid = false
        }
    } 

    strArray.forEach(char => {
        // Percorre enquanto for valido
        if ( valid ) {
            //console.log(char, open, valid)
            // Nada aberto
            if ( openBrackets.length == 0 ) {
                checkOpenBracket(char)
            } else {
                // Algum bracket aberto
                let lastBracket = openBrackets[openBrackets.length - 1]
                switch ( lastBracket ) {
                    case '(':
                        if ( char == ')') {
                            openBrackets.pop()
                        } else {
                            checkOpenBracket(char)
                        }
                        break;

                    case '{':
                        if ( char == '}') {
                            openBrackets.pop()
                        } else {
                            checkOpenBracket(char)
                        }
                        break;

                    case '[':
                        if ( char == ']') {
                            openBrackets.pop()
                        } else {
                            checkOpenBracket(char) 
                        }
                        break;
                                        
                    default:
                        break;
                }
            }
        }
    });
    if ( openBrackets.length > 0 ) {
        valid = false
    }

    if ( valid ) {
        console.log('This string is valid - ', str)
    } else {
        console.log('This string is NOT valid - ', str)
    }
}



