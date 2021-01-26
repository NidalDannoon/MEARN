//(1)
console.log(hello);                                   
var hello = 'world';                                 
//AFTER HOISTING BY THE INTERPRETER
//var hello;  
//console.log(hello);
//var hello = 'world';
//Output is: undefined

//(2)
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
//var needle = 'haystack';
//var needle = 'magnet';
//test();
//function test(){
//	console.log(needle); // 'magnet'
// }
//Output is:"magnet"

//(3)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//AFTER HOISTING BY THE INTERPRETER
//var brendan = 'super cool';
//console.log(brendan); 
//Output is:"super cool"

//(4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
//var food = 'chicken';
//console.log(food);
//eat();
//food = 'half-chicken';
//console.log(food); 
//Output is:"chicken"
//Output is:"half-chicken"

//(5)

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
//Output is: undefined
// Error

//(6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
//console.log(genre);
//rewind();
//    var genre = "rock";
//    console.log(genre);
//    var genre = "r&b";
//    console.log(genre); 
//genre = "disco";
//console.log(genre); 
//Output is:undefined
//Output is:"rock"
//Output is:"r&b"
//Output is:"disco"

//(7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
//var dojo = "san jose";
//console.log(dojo); 
//learn();
//    dojo = "seattle";
//    console.log(dojo); 
//    dojo = "burbank";
//    console.log(dojo); 
//console.log(dojo);
//Output is:"san jose"
//Output is:"seattle"
//Output is:"burbank"
//Output is:"san jose"

//(8)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//Output is:undefined
// Error
