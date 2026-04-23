//stack and heap memory

//Stack memory jisme premitive data type ke data store hote hai, isme stack form me save hote hai to jab bhi kahi ike data ko use kiya jata hai vo copy form me jata hai original nhi jata

let num1 = 12;
let num2 = num1;
console.log(num1);
console.log(num2);

num2 = 22;
console.log(num1);
console.log(num2);

//heap memory me data ek hi jagah store hota hai koi bhi call kre vo vhi data access krega aur change hoga to vo bhi usi me hoga yaha copy nhi balki refrence diyya jata hai

let obj = {
    name : "jayesh",
    age : 22
}

let obj2 = obj

obj2.name = "khushi"

console.log(obj);

let arr = ["name","paisa"];

let arr2 = arr;

arr2[0] = "Jayesh"

console.log(arr);

