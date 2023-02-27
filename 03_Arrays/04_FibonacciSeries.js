// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// Example 1:-

// function febonacciGenerator(n) {
//     let arr = [];

//     let a = 0;
//     let b = 1;
//     let febo = 0;


// if(n==1){
//     arr.push(a);
//     return arr;
// }else{
//     arr.push(a);
//     arr.push(b);

//     for(let i=3; i<=n; i++){
       
       
//         febo = a + b;
//         arr.push(febo);
//         a = b;
//         b = febo;
//     }
//     return arr;
// }

// }


// let n = 5;
// let output = febonacciGenerator(n);
// console.log(output);

// Example 2:-

function febonacciGenerator(n){
    var output = [];

    if(n===1){
        output = [0];
    }else if(n === 2){
        output = [0, 1];
    }else{
        output = [0, 1];
        for(let i = 2; i<n; i++){
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output;
}


let n = 3;
let output = febonacciGenerator(n);
console.log(output);