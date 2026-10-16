let students = [
    { name: "John", age: 16, grade: 75 },
    { name: "Jane", age: 19, grade: 85 },
    { name: "Bob", age: 17, grade: 90 }
];



let newArr = students.filter((item)=>{
    return item.age < 28 && item.grade < 80
})

console.log(newArr);
