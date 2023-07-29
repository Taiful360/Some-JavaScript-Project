/*1-6 এর ভিতরে নাম্বার প্রিন্ট বা লুডু গুটি*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getRandomNumber(1, 6));

  /*নাম অনুসারে সাজানো*/

  const students = ["Taiful", "Saad", "Sumit", "Akash"]
  console.log(students.sort());

  /*বড়-ছোট বা ছোট-বড় ক্রমে সাজানো*/

  const roll_number = [3, 5, 10, 12, 8, 1, 2, 4, 6, 7, 9, 11];

  console.log(roll_number.sort(function(a, b){
    return b-a;
  }));

  /*লিপিয়ার বছর বের করা*/

  function leapYear(year){
    if((year % 400=== 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year!`);
    } else {
        console.log(`${year} is not a leap year!`);
    }
  }

  leapYear(2044);

  /*ভাওয়েল বের করা*/

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });

    return count;

    }
    console.log(countVowels("taiful"));

     /*কোন Arry থেকে duplicate নাম্বার বের করা*/

const numbers = [1, 4, 5, 5, 6, 4, 6, 9, 8, 8, 10];

const duplicates = numbers.filter(function(value, index, arry){
    return arry.indexOf(value) !== index
});

console.log(duplicates);


