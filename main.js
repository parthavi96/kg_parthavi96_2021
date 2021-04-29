// Logic with static input
var inp = [3,25,209]
out = []

// Building an array with phonetic equivalent of there respective indexes
var num =  ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
var temp = 0
var result = ""

// Calling function for all the input numbers
inp.forEach(phoneticEqu)

function phoneticEqu(i){
    i = parseInt(i)
    // Separating each digits in number
    while(i>0){
        temp = i % 10
        out.push(num[temp])
        i = parseInt(i / 10)
    }
    // To get the digits in correct sequence
    while(out.length >0)
    {
        result += out.pop()
    }
    result += ","
}
 
console.log(result)

