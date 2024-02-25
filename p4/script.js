//arthematic operator
let number1 = 4;
let number2 = 6;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1**number2);
console.log(++number1);

//assignment operator
let number3 = 5;
number3 *= 6;
console.log(number3);
number2 %= 8;
console.log(number2);

//comparison operator
console.log(number1 === number2);
console.log(number2 <= number3);

//logical operator
let number4 = 10;
console.log(number1 == 4 && number3 != number1);
console.log(number3 <= 4 || number4 >= 11);
console.log(!(number4 == 10 || number3 > 3));


//functions
function multi(number5,number6) {    //parameter
    console.log(number5*number6)
}
multi(6,5); //argument


//if else, elif
let number8 = 6;
let number9 = 7;
if(number8 == 8) {
    console.log("this is true");
}
else if(number9 == 7) {
    console.log("this is only true");
}
else{
    console.log("this is false");
}


//for loop
for(i=0; i<5; i++) {
    console.log("laddu");
}


//while loop
while(number8 < 10) {
    console.log("maari");
    number8++;
}

//strings handlings
let name1 = "ANAND";
let name2 = "laddu";
console.log(name1+" "+name2);
console.log(name1[0]);
console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name1.toLowerCase());
console.log(name2.slice(1,4));

let name3 = "       jfhsfusgjn           ";
let name4 = "hfioejgorsf";
console.log(name3.trim());
console.log(name2.repeat(2));
console.log(name1.replace("ANAND","maari"));

let name5 = "maari";
let name6 = "laddu";
console.log(name5+" "+name6);




 


