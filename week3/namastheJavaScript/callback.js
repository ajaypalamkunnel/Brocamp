                                
// callback real exampled
let posts = [
    { id: 1,title:"intro" },
    { id: 2,title:"chap1" }
];


const getPost = ()=>{
    let lis =[];

    setTimeout(()=>{

        posts.forEach(post=>{
        lis.push(`post is ${post.id} title is ${post.title} `) 
        }) 
        for(let i of lis){
            console.log(i);
        }

    },1000)
    
}


const addPost=(post,callback)=>{
    setTimeout(()=>{
        posts.push(post);
        callback()
    },2000)
}


addPost({id: 3,title:"chapter 2"},getPost)
