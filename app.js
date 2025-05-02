
//  declaration variable
// var a = 22;
// var b = 21;
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log(a - b);
// console.log(typeof(a)); // this two lines return same result. 
// console.log(typeof a);  // this two lines return same result.

 



// var c = '23';
// var d = '20';
// console.log(c + d); // output 2320 as string concate 
// console.log(c - d); // output 3 as number
// console.log(c * d); // output 460 as number
// console.log(c / d); // output 1.15 as number

// var c = '20';
// var d = 'sajal';
// var e;
// console.log(c + d); // 20sajal as string result concate
// console.log(c - d); // NaN
// console.log(c * d); // NaN
// console.log(c / d); // NaN
// console.log(e); // undefined. assigned no value
// console.log(typeof e); // undefined
// console.log(typeof c); // string
// console.log(Number(c)); // return as number color. convert to number.

// console.log(Number.MAX_VALUE); //1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.EPSILON); // 2.220446049250313e-16


// var q = string(2132)
// console.log(q); // error

// var d = '1234';
// var f = 123;
// console.log(Number.parseFloat(d)); // string convert to number
// console.log(d.toString); // type function
// console.log(toString(d)); // object undefined. 
// console.log(String(f)); // number convert to string

// console.log(Number(Infinity)); // infinity as number color
// console.log(String(Infinity)); // infinity as string color
// console.log(Boolean(Infinity)); // true. as boolean result

// ### boolean to string

// var w = true;
// console.log(w(toString)); //error
// console.log(string(w));// error
// console.log(w.toString); //[Function: toString] type function
// console.log(String(w)); // true as string color

// ## octal and hexadecimal number
// var hex = 0xff; // 255. hexadecimal starts with 0
// var oct = 0965; // 965. octal number starts with 0

// console.log(hex);
// console.log(oct);

// @@ increment and decrement 

// var a = 10;
// console.log(++a); // add one and than print result =11
// console.log(a++); // add one and store it
// console.log(a); // increased number show in this line result = 12

// console.log(--a); // minus 1 and than print . result = 9
// console.log(a--); // minus 1 and store it
// console.log(a); // decreased number print in this line. result = 9

// ## assignment operator

// var q = 12;
// var w = '12';
// var e = 12;
// var r = 21;

// console.log(q == w); // true. check value
// console.log(q === w); // false. check value and type. value matched but type not matched
// console.log(q === e); // true. value and type matched.
// console.log(e == r); // false. value not matched
// console.log(e === r); // false.value and type not matched.
// console.log(q != w); // false, value matched so it should be true
// console.log(q !== w); // true. value matched but type not matched.
// console.log(q > w); // false
// console.log(q >! w); // true
// console.log(e < r); // true
// console.log(e <! r); // false
// console.log(e <= r); // true
// console.log(e >= w); // true

// @@@ math function

// console.log(Math.E); // 2.718281828459045
// console.log(Math.PI); // 3.141592653589793

// var a = 234.33;
// var b = -234.22;

// console.log(Math.abs(b)); // return absolute positive number 
// console.log(Math.floor(a)); // return integer number without decimal
// console.log(Math.fround(b)); // return -234.22000122070312 
// console.log(Math.ceil(a)); // return 235 next integer number
// console.log(Math.round(b)); // return number without decimal 
// console.log(Math.max( 300, 32, 432)); // 432
// console.log(Math.min(23, 234, 2132)); // 23
// console.log(Math.pow(3,3)); // 27
// console.log(Math.sqrt(81)); // 9
// console.log(Math.random()); // return random decimal number every time
// console.log(Math.round(Math.random())); // return 0 or 1 randomly every time.
// console.log(Math.round(Math.random(20* 1 + 2))); // return 0 or 1 
// console.log(Math.round(Math.random) * 20 + 1); // NaN
// console.log(Math.round(Math.random() * 20 + 2)); // return 1 to 22 randomly.
// console.log(Math.round(Math.random() / 20 + 1)); // return 1 every time
// console.log(Math.round(Math.random() * 20 -2 )); // return 1 to 22 randomly

// @@@ date function

// var date = new Date()
// console.log(date); // return current date
// console.log(date.toDateString); // type function 
// console.log(date.getDate); // type function 
// console.log(date.getDay); // type function 
// console.log(date.getFullYear); // type function 
// console.log(date.getHours); // type function 
// console.log(date.getMilliseconds); // type function 
// console.log(date.getMinutes); // type function 
// console.log(date.getTime); // type function 
// console.log(date.getTimezoneOffset); // type function 
// console.log(date.getUTCDate); // type function 
// console.log(date.getUTCDay); // type function 
// console.log(date.toLocaleDateString); // type function
// console.log(date.toLocaleString); // type function
// console.log(date.toLocaleTimeString); // type function

// console.log(date.getDate());  // every time get result
// console.log(date.getDay()); // every time get result
// console.log(date.getFullYear()); // every time get result
// console.log(date.getHours()); // every time get result
// console.log(date.getMilliseconds()); // every time get result
// console.log(date.getMinutes()); // every time get result
// console.log(date.getMonth()); // every time get result
// console.log(date.getSeconds()); // every time get result
// console.log(date.getTime()); // every time get result
// console.log(date.getTimezoneOffset()); // every time get result
// console.log(date.getUTCDate()); // every time get result
// console.log(date.getUTCDay()); // every time get result

// console.log(date.getweek()); // week is not a function. error. 

// @@@ if condition

// var a = 12;
// var b = 12;

// if (a = b) {
//     console.log('a' + ' is equal to ' + 'b' ); // print a is equal to b
// }
// if (a > b) {
//     console.log('a ' + ' is greater than ' + 'b');  // no result
// }

// @@@ even and odd number checking

// if (a % 2 == 0) {
//     console.log(a +  "is even number");  // condition is true. so output here
// }

// if (a % 2 == 1) {
//     console.log(a + ' is odd number');   // no result
// }

// @@@ else condition

// if (a % 2 == 1) {
//     console.log(a + ' is odd number'); // no result
// } 
// else{
//     console.log(a + ' is even number'); // output here
// }

// @@@ else if condition

// var q = 10;
// var w = 13;

// if (q > w ) {
//     console.log(q + 'is greater than ' + w);
// }
// else if (q < w ){
//     console.log(q + ' is less than ' + w);
// }
// else if (q = w) {
//     console.log(q + ' is equal to ' + w); // 13 is equal to 13. why happen this? 
// }
// else if (q == w) {
//     console.log(q + 'is equal to ' + w); // when this condition failed  
// }
// else {
//     console.log('q is less than w'); // print this line
// }

// if (q % 2 == 1) {
//     console.log(q + ' is a odd number ');
// }
// else if (q % 2 == 0) {
//     console.log(q + ' is an even number'); // print this line
// }
// else {
//     console.log('nothing is correct'); // no need to execute this line.
// } 


// @@ switch statement

var date = new Date()
var today = date.getDay()

switch (today) {
    case 0:
        console.log('today is sunday');
        break;
    case 1: 
        console.log('today is monday');
        break;
    case 2: 
        console.log("today is tuesday");
        break;
    case 3: 
        console.log('today is wednesday');
        break;
    case 4: 
        console.log('today is thursday');
        break;
    case 5: 
        console.log('today is friday');
        break;
    case 6: 
        console.log('today is saturday');
        break;
    case 7: 
        console.log('today is none');
        break
    default:
        console.log('nothing found');
        
        break;
}





































































