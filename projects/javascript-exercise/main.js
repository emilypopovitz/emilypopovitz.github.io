var name = "emily"
console.log('name:' , name)

var integer = 2
console.log(2)
var integer = "2"
var boolean = true
console.log(boolean)

var array = [ 'e, m i, l, y' ]
var firstItem = ['e']; 
var lastItem =  ['y'];
console.log('firtItem is:', firstItem);

console.log(array)
var array = [ true, 'a', "2"]
console.log(array)

var name = 'emily' + 'popovitz'
console.log(name)

var integer = 50 + 50
console.log(integer)

console.log(array.length);
var anotherString = "supercalifragilisticexpialidocious" ;
console.log(anotherString.length)
var lastName = "Popovitz";
console.log(name.length == lastName.length);

var students = [
 'emily',
	'vee',
	'sophia',
	'malini',
	'ethan',
	'nicole',
	'ani',
	'sarah',
	'ivy',
	'hunter',
	'daniela',
	'carly',
	'sophie',
	'allison',
	'germaine'
] ;

if (students.length=15) {
	console.log("all students are here")
}
else {
	console.log("not everyone is here");
}

for (i=0; i<10; i++) {
	console.log(array[i])
}

var date = new Date;
var hour = date.getHours();

if ( hour == 0 ) {
  console.log("woah, it's midnight");
} else if ( hour > 19 && hour < 22) {
  console.log("it's too early, go back to bed");
} else {
  console.log("carpe diem");
}

var day = date.getDay();

if (day==0) {
	console.log("It's Sunday");
}

else if (day==1) {
	console.log("It's Monday");
} else if (day==2) {
	console.log("It's Tuesday"); }
else if (day==3) {
	console.log("It's Wednesday");
} else if (day==4) {
	console.log("It's Thursday");
} else if (day==5) {
	console.log("It's Friday");
} else if (day==6) {
	console.log("It's Saturday");
}









