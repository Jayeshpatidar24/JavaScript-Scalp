 //lets create objects 
const symBol = Symbol("value")
const obj = {
     name : "jayesh",
     age : null,
     location : "india",
     func : function(){
         console.log("hello");
        
     },
    [symBol] : "Annabelle"
}

console.log(typeof obj);
 console.log(typeof obj["name"]);
console.log(typeof obj.age);
console.log(typeof obj.func());
 console.log(obj);

let name = null
console.log(typeof name);


const applicationFeature = {
    chat : true,
    post : true,
    thread : false,
    upload : true,
    store : true

}

console.log(applicationFeature);
let owner = "Jayesh"
const car = {
    model : "BMW27V8M220301M",
    color : "china blue",
    engine : "V8 xTurbo",
    chassis  : "GermanEmp",
    "top speed" : 290+" Kmph",
    insurance : true,
    "owner side" : function(owner){
        console.log(`hello mr. ${owner} congratulation for new ${this.model}`);
        
    }
}

console.log(car);
console.log(car["owner side"](owner));


