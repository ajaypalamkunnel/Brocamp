let posts = [
  { id: 1, title: "intro" },
  { id: 2, title: "chap1" },
];

const getPost1 = () => {
  return new Promise((resolve) => {
    let lis = [];

    setTimeout(() => {
      posts.forEach((post) => {
        lis.push(`post is ${post.id} title is ${post.title}`);
      });

      for (let i of lis) {
        console.log(i);
      }

      resolve();
    }, 1000);
  });
};

const addPost1 = (post) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
};

async function trigger() {
  await addPost1({ id: 3, title: "chapter 2" });
  await getPost1();
}

trigger();
