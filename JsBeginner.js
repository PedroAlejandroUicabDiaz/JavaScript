// JavaScript basics
/* Basic math operations -------------------

1+1;
90-70;
5-10;
10*-8;
1.1*1.1;
10*10;
10/5;
5.5/2.1;
-100/-5;
30%4;
20%2;

//Math operations --------------------------

(2+4)*10;
((5*(3+4*(5*9)))/2);
1/0;
-1/0;
0/0;

//Some Comparations -------------------------

1>5;
10<100;
2==2;
3!=5;
3!=3;

//Strings ------------------------------------

'hello world';
"Hello World";
"I'm learning JavaScript";
"Hello" +" " + "World";
"1,2,"+3;
"a" < "b";
null == undefined;

//accessing to any characters ------------------
"This is a string ".charAt(3);
"Hello World".substring(0,5);
// 'Length is a property, don't use ()
"She likes sunflowers".length;

//////////////////////////
//Variables, Arrays and Objects

//Variables are declared with the 'var' keyword; JavaScript is dinamcally. Typed, so you don't need to specify type.

var AnyVar=5;
var VarA=17; VarB=10;

//If you leave the var keyword off, you won't get an error but, our varible will be created in the global scope, not in the scope.

AnyOtherVar=10;
AnyVar +=5;
AnyVar *=10;

//Arrays--------------------------------
var newArray=["Hello",45, true];
newArray[0];
newArray[1];
newArray[2];

//Arrays are mutable and of variables length
newArray.push("World")

//Our corrent size is 4
newArray.length;
newArray[3];

// Add/modify at specific index
newArray[3]= "Home"

//Index modified
newArray[3];

//Add and remove element from front or back end of an Array
newArray.unshift(3); // add as the first element
var SomeVar=5;
SomeVar = newArray.shift()// Remove first element
newArray.push(3);// Add as the last element
newArray[4];
SomeVar=newArray.pop();

//Remove last element and return it
newArray[4]; // index[4]=0;

//Join all elements of an array with semicolon
var myArray=[32,false,"Js",12,30,90];
myArray.join(";");

//Get subarray of elements
myArray.slice(1,4);

//Objejcts---------------------------------
//JavaScript's objects are equivalent to "dictionaries" or "maps", in other words is an unordered collection of key-value pairs
var MyObj= {key1: "Hello", key2: "World"};
MyObj.key2;
*/
