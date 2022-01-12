// const willfly = new Promise((resolve, reject) => {
//   const random = Math.random();
//   if (random < 0.5) {
//     resolve("Success");
//   } else {
//     reject("Failure");
//   }
// })
//   .then(() => {
//     console.log("Promise is R e s o l v e d");
//   })
//   .catch(() => {
//     console.log("Promise is R e j e c t e d");
//   });

// const willFly = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const random = Math.random();
//       if (random < 0.5) {
//         resolve("Success");
//       } else {
//         reject("Failure");
//       }
//     }, 2000);
//   });
// };

// willFly()
//   .then(() => {
//     alert("Promise is R e s o l v e d");
//   })
//   .catch(() => {
//     alert("Promise is R e j e c t e d");
//   });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { name: "Usama", id: 1 },
          { name: "Usman", id: 5 },
        ],
        "/users/1": {
          id: 1,
          username: "Usama",
          upvotes: 200,
          city: "Lahore",
          topPostId: 4565,
        },
        "/users/2": {
          id: 5,
          username: "Usman",
          upvotes: 100,
          city: "Karachi",
        },
        "/posts/4565": {
          id: 4565,
          title: "Hey I am a Software Engineer",
        },
        "/about": "This is About page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};
/* Channing Promises using Then */

fakeRequest("/users").then((res) => {
  const uderId = res.data[0].id;
  fakeRequest(`/users/${uderId}`).then((res) => {
    const postID = res.data.topPostId;
    console.log(res.data.username);
    fakeRequest(`/posts/${postID}`).then((res) => {
      console.log(res.data.title);
    });
  });
});

// fakeRequest("/about")
//   .then((res) => {
//     console.log("Status code", res.status);
//     console.log("Data", res.data);
//   })
//   .catch((rej) => {
//     console.log("Promise Rejected");
//     console.log("Status code", rej.status);
//   });
// fakeRequest("/products")
//   .then((res) => {
//     console.log("Status code", res.status);
//     console.log("Data", res.data);
//   })
//   .catch((rej) => {
//     console.log("Promise Rejected");
//     console.log("Status code", rej.status);
//   });
