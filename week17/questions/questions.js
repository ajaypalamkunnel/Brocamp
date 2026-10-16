var num = parseFloat(prompt('Please enter a number: ') || '0');
var sum = 0;
for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        process.stdout.write(i.toString());
    }
    console.log('\n');
}
