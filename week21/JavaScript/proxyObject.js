let person = {
    name:"ajay",
    age:25
}

let handler = {
    set(target,property,value){
        console.log(`setting ${property} to ${value}`)
        target[property] = value
        return true
    },
    
    get(target,property){
        console.log(`getting ${property}`)
        return target[property]
    }
}

let proxyPerson = new Proxy(person,handler)

proxyPerson.age = 21

console.log(proxyPerson.name)

