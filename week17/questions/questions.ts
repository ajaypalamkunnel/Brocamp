
let num : number = parseFloat(prompt('Please enter a number: ') || '0');
let sum:number=0
for(let i:number=1;i<=num;i++){
    for(let j:number=1;j<=i;j++ ){
        process.stdout.write(i.toString());
    }
    console.log('\n')
}
