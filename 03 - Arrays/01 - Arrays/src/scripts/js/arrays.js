var str = "";
var fruits = ["Apple","Orange","Grapes","Pineapple","Strawberries"];

console.log("Printing the array length: ");
console.log(fruits.length);

console.log("Printing position 0 value: ");
console.log(fruits[0]);


console.log("Printing array with a pushed element: ");
fruits.push("Bananas")
str = "";
for(var i = 0 ; i < fruits.length; i++) {
    str += fruits[i] + " ";
}
console.log(str);

console.log("Printing array with the pushed element poped: ");
fruits.pop("Bananas")
str = "";
for(var i = 0 ; i < fruits.length; i++) {
    str += fruits[i] + " ";
}
console.log(str);

console.log("Printing array with an unshift element: ");
fruits.unshift("Kiwi")
str = "";
for(var i = 0 ; i < fruits.length; i++) {
    str += fruits[i] + " ";
}
console.log(str);

console.log("Printing array with the shifted element: ");
fruits.shift("Kiwi")
str = "";
for(var i = 0 ; i < fruits.length; i++) {
    str += fruits[i] + " ";
}
console.log(str);

console.log("Printing the array index of 'Pineapple' ");
console.log(fruits.indexOf("Pineapple"));