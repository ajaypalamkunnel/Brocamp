var Messages;
(function (Messages) {
    function greet(name) {
        console.log(name);
    }
    Messages.greet = greet;
    function hello() {
        console.log("hiii");
    }
    Messages.hello = hello;
})(Messages || (Messages = {}));
Messages.greet('ajaay');
