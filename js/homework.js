// დავალება:
// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.  //homework.js
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const myString = "some text",
	myNumber = 20,
	myBool = true,
	myNull = null;

let myUndefined = undefined;
// 3. დამატებით შექმენით ცვლადები myName, myHobby,  yearOfBirth, currentYear და მიანიჭეთ თქვენი სახელი, ჰობი, დაბადების წელი, მიმდინარე წელი.

let myName = "Alina";
let myHobby = "coding";
let yearOfBirth = 1996;
let currentYear = 2022;
// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: My name is (აქ name ცვლადი), I am (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   ცვლადების გამოყენებით) old and my hobby is (აქ hobby ცვლადი), გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.

let text1 =
	"My name is " +
	myName +
	" " +
	"I am " +
	(currentYear - yearOfBirth) +
	"old and my hobby is" +
	myHobby;

// console.log(text1);

let text2 = `My name is ${myName} I am ${
	currentYear - yearOfBirth
} old and my hobby is ${myHobby}`;

// console.log(text2);
