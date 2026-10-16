let student = [
    { "name": "John", "age": 28, "department": "Marketing" },
    { "name": "Jane", "age": 35, "department": "Sales" },
    { "name": "Bob", "age": 32, "department": "Sales" }
]


let newstudents = student.filter((value)=>{
    return value.age > 30 && value.department === "Sales"
})

console.log(newstudents);
