


const fetchData = async ()=>{

    let response = await fetch('https://dummy.restapiexample.com/api/v1/employees')

    if(!response.ok){
        throw new Error(`Response status: ${response.status}`)
    }

    const data = await response.json()

    console.log(data);
    

    return data
        
    

}

module.exports = {fetchData}