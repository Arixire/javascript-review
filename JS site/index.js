/* lesson 1 
console.log("I like coffee!");
console.log("It keeps me from unaliving annoying people...");
window.alert("Insurance claim likely...release the sharkens");
*/
/*let is best practice because of variable scope*/


/*let firstname = 'Tristan';
let age;
    age=27; /* assign valye to variable*/
// let student = true;

/*bullion: true of false statement*/
/* lesson 2 strings and number variable */
/*console.log('hell0', firstname);
console.log(age);
console.log(student);
/* arithmetic example*/
/*console.log(age+1);

document.getElementById("p1").innerHTML = "Hello" + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: "+ student; */

/* lesson 3 arithmetic expression 
    opperanda(values, variables etc..)
    operator(maths)
    ex. y= x+5*/
    //let students =20;
// order of operations apply
//PEMDAs
// parenthesis, exponents, multiplication, division, addittion and subtraction


    //console.log(students);

// learn elementor ? 
    //thought induced by ad look into it as well as wordpress shopify drupal AWS and others as jobs seem to want experience in those programs


    /* accepting input*/
   // Easy way pure .js
    /*let username= window.prompt("Whats your name?")
    console.log(username);
    */
   // with HTML
  /* let username;

   document.getElementById("myBtn").onclick=function(){
    username= document.getElementById("myText").value;
    console.log(username);

   }*/

// Type conversion; change the datatype of a value to another

/*let age = window.prompt( "How old are you?");{
    console.log(typeof age);
    age= Number(age);27
    age +=1;
    console.log("Happpy Birthday! You are", age
    , "years old");

}*/

/*let x;
let y;
let z;
x = Number("3.14"); //if a none changeable string (letters or non numeral symbols exist) NaN will be spit back out

console.log(x, typeof x);
y = String(3.14);
z= Boolean("tacos");//if empty boolean will display false if a string exists it will display true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

// constants a variable that cannot be changed to add some data security to the code as it is anon changeable section
//let pi=3.14159
/*const PI= 3.14159; // common to name constants in all caps; to be used anytime a variable does not have cause to be changed
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius*
*/

//Math : intrinsic object that helps with non basic arithmetic
/*let x = 3.14;
let y= 5
let z= 9
let max
let min*/

//x= Math.round(x); // will round to nearest whole #
//x= Math.floor(x); // will round x down
//x= Math.ceil(x); // will round x up
//x= Math.pow(x,2) // x to the power of 2
//x=Math.sqrt(x); // square root of x
//x=Math.abs(x); // absolute value: distance away from zero'
//max=Math.max(x,y,z);//the max of the collected variables
//min= Math.min(x,y.z);//the min of the collected variables
    //built in constants of Math
//I.E
 /*   x=Math.PI; // returns 15 digits of Pi



console.log(x);
*/

// Hypotenuse of Triangle program
let a;
let b;
let c;

a=window.prompt("enter side a: ");
b= Number(b);

a=window.prompt("enter side a: ");
b= Number(b);

c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    console.log(c);
    