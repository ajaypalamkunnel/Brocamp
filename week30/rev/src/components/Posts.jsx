import React, { useEffect } from "react";

const Posts = () => {

    const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.typicode.com/404" // invalid
];


  async function featchWithRetry(url, retries) {
    for (let attempts = 0; attempts <= retries; attempts++) {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        console.log(response.json())
        return await response.json();
      } catch (error) {
        if (attempts === retries) {
          return `Failed : ${error.message}`;
        }
      }
    }
  }

  async function featchWithLimits(urls,limit,retries){
    const results = new Array(urls.length)
    let index = 0;

    async function worker(){

        while(index < urls.length){
            const currentIndex = index++
            results[currentIndex] = await featchWithRetry(urls[currentIndex],retries)

        }
    }

    const workers = Array(limit).fill(null).map(()=>worker())
    await Promise.allSettled(workers)

    return results
  }

  useEffect(()=>{

    featchWithLimits(urls,4,2).then(data=>console.log(data))

  },[])



  return <div>Posts</div>;
};

export default Posts;
