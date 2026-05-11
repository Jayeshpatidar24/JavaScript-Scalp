

let myDate = new Date()
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let dateIn = new Date(2003,7,25,6,30,25)
console.log(dateIn.toDateString());

 
console.log(dateIn.toLocaleString());
console.log(dateIn.getTime()); // time from 1st januray to now
console.log(dateIn.toDateString());
console.log(dateIn.toISOString());
console.log(dateIn.toLocaleTimeString());
console.log(dateIn.toTimeString());
console.log(dateIn.toJSON());
console.log(dateIn.getTimezoneOffset());



let timeStamps = Date.now()
 console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
 console.log(newDate.getTime());

//  `${newDate.getMinutes()} takes minutes` 



// console.log(newDate.toLocaleString('IN',{
//      day :  "2-digit",
//      month : "long",
//      year : "numeric"

// }));

newDate = newDate.toLocaleString('IN',{
     day :  "2-digit",
     month : "long",
     year : "numeric"
})

console.log(newDate);








