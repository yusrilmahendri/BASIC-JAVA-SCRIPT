//operator string
var x = "Hallo ";
var y = "World ";
var temp = x + y;
console.log(temp);

//operator assigment
var a;
var b;
a = 5;
b = "nilai";
console.log(a, b);

//operator spread
var angka1 = [1, 2, 4, 5];
var angka2 = [6, 7, 8, 9];
var gabungan = [...angka1, ...angka2];

console.log(angka1, angka2);
console.log(gabungan);

//urutan operator
/* 
(), 
* / %, 
+ -, 
== != === !=, 
&&, 
||
*/
//contoh
var ay = 10 + 3 * 2;
console.log(ay);