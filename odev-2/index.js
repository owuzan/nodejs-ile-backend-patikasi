const posts = [
  { title: "Post Başlık 1", detail: "Post Detay 1" },
  { title: "Post Başlık 2", detail: "Post Detay 2" },
  { title: "Post Başlık 3", detail: "Post Detay 3" },
  { title: "Post Başlık 4", detail: "Post Detay 4" },
  { title: "Post Başlık 5", detail: "Post Detay 5" },
];

const getPosts = (bool) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bool) {
        resolve({ posts });
      } else {
        reject({ message: "Gönderiler getirilemedi." });
      }
    }, 1000);
  });
};

const showPromisePosts = (bool) => {
  getPosts(bool)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

const showAsyncPosts = async (bool) => {
  try {
    const posts = await getPosts(bool);
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
};

showPromisePosts(true);
showAsyncPosts(false);
