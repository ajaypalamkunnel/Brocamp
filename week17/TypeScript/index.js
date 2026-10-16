//infer types (implicity types)
//let username = "ajay";
// username = 433 ====> makes error Ts automatically typed to string
//let age = 20;
// age = dfd;  ====> makes error Ts automatically typed to number 
//Definging types (Explicit types)
var place = "Hello world";
var pincode = 686576;
var isNice = true;
var skills = ['JS', 'TS'];
var salary = [4, 32, 4, 2,];
var emptyArry = [];
var userDetails = {
    name: 'ajay',
    age: 20
};
console.log(place);
console.log(userDetails.name);
var Greetings = /** @class */ (function () {
    function Greetings() {
    }
    Greetings.prototype.greet = function () {
        console.log("Good Morning");
    };
    return Greetings;
}());
var gree = new Greetings();
gree.greet();
var obj = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
};
console.log(obj.getFullName());
//class
var Greeting = /** @class */ (function () {
    function Greeting(message) {
        this.greeting = message;
    }
    Greeting.prototype.greet = function () {
        return 'Hello' + ' ' + this.greeting;
    };
    return Greeting;
}());
var greater = new Greeting('world');
console.log(greater.greet());
var userDetailsEMP = {
    name: "Ajay",
    age: 20,
    salary: 20000,
    getName: function () {
        console.log(this.name);
    }
};
var EMPskills = ["JS", 5, 'dvf'];
// fucntions
function getUsername(userDetails) {
    //function nte ullill types mention cheyyuvanegil endokkeyanu 
    //object ill ullath endhannu ennu kaanan pattum
    return userDetails.name;
}
console.log(getUsername(userDetailsEMP));
//inganeyanu functionntee return cheyunna variablente type specify cheyyunnath 
function getage() {
    return 10;
}
//Tupple
var tup = [20, 'ajay', true];
console.log(tup[1]);
var prayam = 'two';
