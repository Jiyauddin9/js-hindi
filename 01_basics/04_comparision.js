// comparison operator

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// trick

// console.log("2" > 1); //automatic js ne convert kar diya hai number me string ko
// console.log("02" > 1);

//Is tarah ke conversion apko kabhi bhi confusion me daal sakte hai.

// console.log(null > 0);
// console.log(null == 0); // null ko convert kar diya 0 ke andar.
// console.log(null >= 0); //to yahan par jo 0 hai wo 0 se bada nhi hai.

// console.log(undefined == 0); // same problem upar wala hi.
// console.log(undefined > 0);
// console.log(undefined < 0);

/* The reason is that an equality check == and comparisons > < >=
<= work diffrently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// === strick check value and data types

console.log("2" === 2);
