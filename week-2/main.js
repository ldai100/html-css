//exercise 1
// alert("Hellow World");

// function change(){
// 	document.getElementById("er").innerHTML="changed";
// }

//exercise 2
// var num1 = 1;
// var num2 = 2;
// console.log(num1+num2);

// var str1 = "meh";
// var str2 = "bleh";
// console.log(str1+str2);

// exercise 3
// var me = {firstName:'Li',lastName:'Dai', birthday:'09/12/1987', interest: ["gaming","snowboard","other"]};
// console.log(me.firstName,me.lastName, me.birthday, me.interest);

// var random=11;
// if(me.interest[1]==10) console.log("less than 10");
// else console.log("number was greater than 10 and it was "+random);

// exercise 4
// function alertName(someName){
// 	console.log("Name entered "+someName);
// }

// alertName(prompt("Enter a name:"));

// function printName(){
// 	console.log("This is printed");
// }
// printName();

// function doors(color){
// 	if(color=="red") console.log("You won!");
// 	else console.log("Nothing won.");
// }
// doors(prompt("Enter a door color:"));

//exercise 5
// var names=["a","b","c","d","e","f"];
// for(var i=0;i<names.length;i++){
// 	console.log(names[i]+" is my friend.");
// }
//exercise 6
// var count=99;
// while(count>=0){
// 	console.log(count + " Bottles of Root Beer on the Wall." + count + " bottles of root beer...take one down, pass it around ");
// 	count--;
// // }

// //exercise Digital clock
// setInterval(function(){

// var tacos = new Date();
// document.getElementById("hr").innerHTML = tacos.getHours();
// document.getElementById("min").innerHTML = tacos.getMinutes();
// document.getElementById("sec").innerHTML = tacos.getSeconds();
// document.getElementById("mili").innerHTML = tacos.getMilliseconds();
// }, 1);

// function validator(event){
// 	debugger;
// 	event.preventDefault;

// }
//advanced java exercise 1
// var driver={car:"Lambo",person:"Neil",user:"Your mom"}
//exercise 2

// function House(type, rooms){
// 	this.type=type;
// 	this.rooms=rooms;
// }

// var home= new House("condo",4);
// var cabin= new House("cabin",8);

// //exercise 3
// function Animals(predator, legs, cute){
// 	this.predator=predator;
// 	this.legs=legs
// 	this.cute = function(){
// 		return "Ths is a cute animal with " + this.legs + " legs.";
// 	}

// }

// var lion= new Animals(true,4);
// var cat= new Animals(false,4);

// Animals.prototype.wat=function(){
// 	return "wtf?";
// }
// Animals.prototype.teeth=10;

//exercise 4
function Animals(wname,legs){
	this.wname=wname;
	this.legs=legs;
	this.meh=function(){
		return "This is a Animal.";
	}
}

function Mammal(){
	this.mammal=true;
	Animals.apply(this,arguments);
}
Mammal.prototype = new Animals();

var something = new Mammal("s",4);
