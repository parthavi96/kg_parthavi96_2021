// Building an array with phonetic equivalent of there respective indexes
var num =  ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
var temp = 0
var result = ""
var output =[]
var out = []


// To read input and print output to console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

// After running the file it asks for input to process 
readline.question('Please enter digits to process', numbers => {
readline.close();

// Spliting the input data with space
var inp = numbers.split(" ")
// Calling function for all the input numbers
inp.forEach(phoneticEqu)

// To write the output in console
console.log(output.join(','))

});



function phoneticEqu(i){
    // Since input from console is in string need to convert it into integer
    i = parseInt(i)
    // Separating each digits in number
    while(i>0){
        temp = i % 10
        out.push(num[temp])
        i = parseInt(i / 10)
    }
    // To get the digits in correct sequence
    result = ""
    while(out.length >0)
    {
        result += out.pop()
    }
    output.push(result)
}