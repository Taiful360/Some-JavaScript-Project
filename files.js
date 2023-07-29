/* বর্গক্ষেত্র নির্ণয়ের সূত্র:

var arm1 = parseFloat(prompt("Enter Arm: "));
var arm2 = parseFloat(prompt("Enter Arm: "));

var formulaSquare = arm1 * arm2;

document.write("বর্গক্ষেত্র নির্ণয়ের সূত্র: বাহু X বাহু । " + " যেমন: " + arm1 + " X " + arm2 + " = " + formulaSquare + " বর্গ একক ।");*/


/* ত্রিভুজক্ষেত্র নির্ণয়ের সূত্র:

var base = parseFloat(prompt("Enter Base: "));
var height = parseFloat(prompt("Enter Height: "));

var formulaTriangle = (base * height) / 2;

document.write("ত্রিভুজক্ষেত্র নির্ণয়ের সূত্র: (ভূমি X উচ্চতা)/2 । " + " যেমন: " + "(" + base + " X " + height + ")" + "/2" + " = " + formulaTriangle + " বর্গ একক ।");*/

/*বর্গ নির্ণয়ের সূত্র:

var arm1 = parseFloat(prompt("Enter Arm: "));
var arm2 = parseFloat(prompt("Enter Arm: "));

var formulaSquare = arm1 * arm2;

document.write("বর্গ নির্ণয়ের সূত্র: বাহু X বাহু । " + " যেমন: " + arm1 + " X " + arm2 + " = " + formulaSquare + " বর্গ একক ।");
    বর্গ নির্ণয়ের সূত্র:

var arm1 = parseFloat(prompt("Enter Arm: "));
var arm2 = parseFloat(prompt("Enter Arm: "));

var formulaSquare = arm1 * arm2;

document.write("বর্গ নির্ণয়ের সূত্র: বাহু X বাহু । " + " যেমন: " + arm1 + " X " + arm2 + " = " + formulaSquare + " বর্গ একক ।");*/


/*var fahrenheit = prompt("Enter fahrenheit Celsius:");

var cels = (fahrenheit - 32) * (5 / 9);

document.write("Temperature: " + cels + "°C" + "<br/>");

var degree = prompt("Enter Degree Celsius: ");

var celsius = (degree * 9 / 5) + 32;

document.write("Temperature: " + celsius + "°F");




var mark = parseInt(prompt("Enter Your Marks"));

if (mark > 100 || mark < 0)
    console.log("Invalite Result");

else if (mark >= 80 && mark <= 100)
    console.log("Congratulations! Your Result: A+");

else if (mark >= 70 && mark <= 79)
    console.log("Congratulations! Your Result: A");

else if (mark >= 60 && mark <= 69)
    console.log("Congratulations! Your Result: A-");

else if (mark >= 50 && mark <= 59)
    console.log("Congratulations! Your Result: B");

else if (mark >= 40 && mark <= 49)
    console.log("Congratulations! Your Result: C");

else if (mark >= 33 && mark <= 39)
    console.log("Congratulations! Your Result: D");

if (mark >= 0 && mark <= 32)
    console.log("Opps! Your Result: Fail.");


var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");

if (num1 > num2 && num1 > num3)
    console.log("Large number = " + num1);

else if (num2 > num1 && num2 > num3)
    console.log("Large number = " + num2);

else
    console.log("Large number = " + num3);



var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
    console.log("Vowel");
else
    console.log("Consonant")



var digit = prompt("Enter any digit : ");

if (digit == 0)
    console.log("Zero");
else if (digit == 1)
    console.log("One");
else if (digit == 2)
    console.log("Two");
else if (digit == 3)
    console.log("Three");
else if (digit == 4)
    console.log("Four");
else if (digit == 5)
    console.log("Five");
else if (digit == 6)
    console.log("Six");
else if (digit == 7)
    console.log("Seven");
else if (digit == 8)
    console.log("Eight");
else if (digit == 9)
    console.log("Nine");
else
    console.log("Not a digit.");


var digit = prompt("Enter any digit : ");

switch (digit) {
    case "0":
        console.log("Zero");
        break;
    case "1":
        console.log("One");
        break;
    case "2":
        console.log("Two");
        break;
    case "3":
        console.log("Three");
        break;
    case "4":
        console.log("Four");
        break;
    case "5":
        console.log("Five");
        break;
    case "6":
        console.log("Six");
        break;
    case "7":
        console.log("Seven");
        break;
    case "8":
        console.log("Eight");
        break;
    case "9":
        console.log("Nine");
        break;

    default:
        console.log("Not a digit");
}

var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();


switch (letter) {
    case "a":
        console.log("Vowel");
        break;

    case "e":
        console.log("Vowel");
        break;

    case "i":
        console.log("Vowel");
        break;

    case "o":
        console.log("Vowel");
        break;

    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");

}

var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();


switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");

}

var sum = 0;

for (var x = 1; x <= 100; x++) {
    sum = sum + x;
}
document.write(sum + "<br/>");

var sum = 0;

for (var x = 5; x <= 10; x++) {
    sum = sum + x;
}
document.write(sum);

var m = parseInt(prompt("Enter first num: "));
var n = parseInt(prompt("Enter last num: "));
var sum = 0;

for (var x = m; x <= n; x++) {
    sum = sum + x;
}
document.write(sum);


var i = 1;
var sum = 0;
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}

document.write(" sum= " + sum);

for (var i = 1; i <= 10; i = i + 1) {
    document.write(" " + i);
}


var i = 1
while (i <= 10) {
    document.write(" " + i);
    i = i + 1
}



var i = 1;
do {
    document.write(" " + i);
    i = i + 1;
} while (i <= 20);



for (var i = 1; i <= 100; i++) {
    if (i == 10) {
        break; 
    }
    document.write(" " + i);
}

for (var i = 1; i <= 100; i++) {
    if (i == 10) {
        continue;
    }
    document.write(" " + i);
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;
    }
    document.write(" " + i);
}

var number = Number(prompt("Enter a Number"));
if (number > 0) {
    console.log("Positive");
}
else if (number == 0) {
    console.log("Zero");
}

else {
    console.log("Negative");
}


var number = Number(prompt("Enter a Number"));
var result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result);







function add(x, y) {
    var result = x + y;
    document.write("Result : " + result + "<br/>");

}
function sub(x, y) {
    var result = x - y;
    document.write("Result : " + result + "<br/>");

}
function mul(x, y) {
    var result = x * y;
    document.write("Result : " + result + "<br/>");

}
function div(x, y) {
    var result = x / y;
    document.write("Result : " + result + "<br/>");

}
function mud(x, y) {
    var result = x % y;
    document.write("Result : " + result + "<br/>");

}

add(10, 6);
sub(20, 5);
mul(4, 7);
div(35, 7);
mud(71, 5);



var p = parseFloat(prompt("Enter first Number: "));
var q = parseFloat(prompt("Enter secound Number: "));

function sum() {
    var result = p + q;
    document.write("Result Sum : " + result + "<br/>");
}
sum();

var num = new Array();

for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter a number : "));
}


var sum = 0;

for (var i = 0; i < 5; i++) {
    console.log(num[i]);
    sum = sum + num[i];

}

console.log("Sum= " + sum);


function highestScore(scores) {
    let max = scores[0];
    for (var x = 0; x < scores.length; x++) {
        if (max < scores[x]) {
            max = scores[x];
        }
    }
    return max;
}

let scores = [21, 45, 98, 15, 12];
let maxScore = highestScore(scores);
console.log(maxScore);

var won = 0;
var lost = 0;

for (let i = 1; i < 6; i++) {
    var guessNumber = parseInt(prompt("Eter a number 1 to 5 : "));

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber == randomNumber) {
        console.log("You have won");
        won++;
    } else {
        console.log("You have lost. Random number was " + randomNumber + ".");
        lost++;
    }

}

document.write("Total Number of won " + won + "<br/>");
document.write("Total Number of lost " + lost);

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

document.write(date + "<br/>");
document.write(year + "<br/>");
document.write(month + "<br/>");
document.write(day + "<br/>");
document.write(hour + "<br/>");
document.write(minute + "<br/>");
document.write(second + "<br/>");



var onVar = document.querySelector("#onOff");
function lightOn() {
    onVar.src = "img/on.jpg";
}
function lightOff() {
    onVar.src = "img/off.jpg";
}

var link = document.getElementsByTagName("a")[0];
link.innerHTML = "Learn with Taiful";
link.style.textDecoration = "none";
link.style.color = "blue";
link.href = "https://learnwithtaiful.com";

var h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "ami taiful";

var h2 = document.createElement("h2");
var text = document.createTextNode("this a h2");
h2.appendChild(text);

var myDiv = document.getElementById("my-id");
myDiv.appendChild(h2);
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);

var photos = ["img/on.jpg", "img/off.jpg", "img/logo.jpg"];
var imgTag = document.querySelector("img");

count = 0;
function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }

}

function prev() {
    count--;

    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }

}
var myVar = document.querySelector("#paraId");

function addStyle() {
    myVar.classList.add("para-style");
}
function removeStyle() {
    myVar.classList.remove("para-style");
}

var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {
    myVar.classList.add("para-style");
});

myVar.addEventListener("mouseout", function () {
    myVar.classList.remove("para-style");
});


var len = document.querySelectorAll(".myButton").length;

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clacked";
    });
}

function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


document.write(generateOTP());



const saveBtn = document.querySelector(".save");
const smsSms = document.querySelector(".sms");
saveBtn.addEventListener('click', saveUser);

function saveUser() {
    smsSms.textContent = "User registration successful";

    setTimeout(display, 2000);
    function display() {
        smsSms.textContent = "";
    };

};

const saveBtn = document.querySelector(".save");
const smsSms = document.querySelector(".sms");
saveBtn.addEventListener('click', displayCount);

function displayCount() {
    let count = 0;
    smsSms.textContent = count;

    setInterval(display, 1000);
    function display() {
        count++;
        smsSms.textContent = count;
    };

};*/




console.clear();

fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json())
    .then((res) => console.log(res));
    .catch ((err) => console.log(err));