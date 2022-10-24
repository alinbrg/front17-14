const btn = document.querySelector(".btn");

const colors = [
	"blue",
	"black",
	"purple",
	"darkblue",
	"darkgreen",
	"orange",
	"#880e4f",
	"#bf360c",
	"#004d40",
	"#263238",
];

btn.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * 10);

	const randomColor = colors[randomIndex];

	btn.style.backgroundColor = randomColor;
	// btn.innerText = "background-color: " + randomColor;
	btn.innerText = `background-color:  ${randomColor}`;
});

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rate: 7.5059,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rate: 6.8303,
		name: "სომხური დრამი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
	{
		code: "AZN",
		quantity: 1,
		rate: 1.6262,
		name: "აზერბაიჯანული მანათი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
	{
		code: "USD",
		quantity: 1,
		rate: 2.7569,
		name: "აშშ დოლარი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
];

// console.log(currencies);

// მასივი, array

let num1 = 10;

const myArr = ["text", 20, null, , true, false, 100, "some another text", num1];

// console.log(myArr);
const myArr2 = ["text10", "text2", "some text", [2, 3, 5, [1, 2, 5]], myArr];

// console.log(typeof myArr2);

// console.log(myArr2, myArr2.length);
// console.log(myArr2[3][3][0]);
let myIndex = 2;
// console.log(myArr2[myIndex]);

// console.log(myArr);

// myArr.push("text");

// console.log(myArr);

// let lastEl = myArr.pop();

// console.log(lastEl, myArr);

// let firstEl = myArr.shift();
// console.log(firstEl, myArr);

// myArr.unshift(20);
let myArr3 = [1, 2, 3];

let myArrString = myArr3.join("   :   ");
// console.log(myArrString, myArr3);

const student = {
	name: "tea",
	age: 20,
	address: ["tbilisi", "batumi"],
	phoneNumber: "123456778",
};

student.address = 20;

// const studentArr = ["tea", 20, ["tbilisi", "batumi"]];
// console.log(student);
// console.log(student.address);

student.age = 21;
student.email = "example@gmail.com";

const ageVar = "age";

// console.log(student[ageVar]);

// console.log(student);

const group1 = 20;
let group2 = group1;

// console.log(group1, group2);

group2 = 30;

// console.log("after change", "group1", group1, "group2", group2);

const subjects1 = ["english", "math"];
const subject2 = subjects1;

const subject3 = [...subjects1, 100, "text"];

// console.log(subject2, subjects1, subject3);

subject2.push("history");
subjects1.push("geography");
subject3.pop();

// console.log("before change", "subject2", subject2, "subject3", subject3);

const student2 = { ...student, height: 175 };
student2.name = "giorgi";

// console.log(student2, student);

console.error("text");

console.table(subject2);
// console.log(subject2);

console.table(student2);
// console.log(student2);

// let name = prompt("whats your name? ");

// alert("hello " + name);
