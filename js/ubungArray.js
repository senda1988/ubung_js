const USERS = [
    {
        id: 1,
        username: "mexx",
        password: "test123",
        firstName: "Max",
        familyName: "Muster",
    },
    {
        id: 2,
        username: "anna",
        password: "test1234",
        firstName: "Anna",
        familyName: "Musterfrau",
    },
];

function testingArrays() {
    USERS.find((item) => { })
}
//concat(): Concatenation of arrays
const array1 = ["Montag", "Dienstag", "Mittwoch"];
const array2 = ["Donnerstag", "Freitag"];
const array3 = ["Samstag", "Sonntag"];
const concatItems = array1.concat(array2, array3);

console.log(`Concatenated array:,${concatItems}`);

//filter function: Filtering weekends

const wochenende = concatItems;

const istWochenende = tag => tag === "Samstag" || tag === "Sonntag"; // Gibt true zurück für Wochenendtage


const result = wochenende.filter(istWochenende);
console.log(`Filtered weekends: ${result}`);

//find():Finding the first weekend day

const tag = wochenende.find(istWochenende);
console.log(`First weekend day found: ${tag}`);

//findIndex() : Finding the index of "Samstag"

const tagIdex = wochenende.findIndex(tag => tag === "Samstag");
console.log(`Index of "Saturday": ${tagIdex}`);

//findLast():Finding the last weekend day

const lastTag = wochenende.findLast(istWochenende);
console.log(`Last weekend day found: ${lastTag}`);

//findLastIndex(): Finding the last index of a weekend day

const lastTagIndex = wochenende.findLastIndex(istWochenende);
console.log(`Last index of a weekend day: ${lastTagIndex}`);

//flat(): Flattening array
const araay = ["Montag", "Dienstag", "Mittwoch", ["Donnerstag", "Freitag"], ["Samstag", "Sonntag"]];
const flatArray = araay.flat();
console.log(`Flattened array:  ${flatArray}`);

//forEach():Using forEach to print each item with its index

let text = "";
const foreachTag = (item, index) => {
    text += index + ": " + item + "\n";
}
concatItems.forEach(foreachTag);
console.log(`forEach output: ${text}`);

//include():Checking if the array includes "Sonntag"
const arrayInclude = concatItems.includes("Sonntag");

console.log(`Does the array include "Sonntag"?: ${arrayInclude}`);


//indexOf(): Getting the index of "Mittwoch"
let index = concatItems.indexOf("Mittwoch");
console.log(`Index of "Mittwoch": ${index}`);

//join():Joining array elements with " | "
let text2 = concatItems.join(" | ");
console.log(`Joined array: ${text2}`);

//length:Getting the length of the array

let lenght = concatItems.length;
console.log(`Array length:${lenght}`);

//map(): Mapping user names from USERS array

const arrayUsers = USERS.map(((item) => item.username));
console.log(`Mapped usernames: ${arrayUsers.join(" | ")}`);

//pop(): Removing the last element (pop)
concatItems.pop();
console.log(`Array after pop(): ${concatItems}`);

//pusch(): Adding an element at the end
concatItems.push("Sonntag");
console.log(`Array after push(): ${concatItems}`);

//reduce(): Reducing numbers by subtracting them
const numbers = [100, 20, 15, 5];
const red = numbers.reduce((total, num) => total - num);
console.log(`Reduced value: ${red}`);

//slice(): Extracting a portion of the array
const tage = concatItems.slice(2, 4);
console.log(`Sliced array (index 2 to 4):  ${tage}`);

//sort(): Sorting strings alphabetically and numbers in ascending order
const sortTage = concatItems.sort();
const sortNum = numbers.sort((a, b) => a - b);
console.log(`Sorted days: ${sortTage}`);
console.log(`Sorted numbers: ${sortNum}`);

//splice(): Using splice to replace elements

numbers.splice(2, 1, 200, 30, 10);
console.log(`Array after splice(): ${numbers}`);


//tostring(): Converting numbers array to a string
const arrayString = numbers.toString();
console.log(`Array converted to string: ${arrayString}`);

