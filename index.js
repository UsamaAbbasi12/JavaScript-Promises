const btn = document.querySelector("button");
// setTimeout(() => {
//   btn.style.transform = "translateX(100px)";
//   btn.style.backgroundColor = "red";
//   setTimeout(() => {
//     btn.style.transform = "translateX(200px)";
//     btn.style.backgroundColor = "crimson";
//     setTimeout(() => {
//       btn.style.transform = "translateX(300px)";
//       btn.style.backgroundColor = "orange";
//       setTimeout(() => {
//         btn.style.transform = "translateX(400px)";
//         btn.style.backgroundColor = "orangered";
//         setTimeout(() => {
//           btn.style.transform = "translateX(500px)";
//           btn.style.backgroundColor = "purple";
//           setTimeout(() => {
//             btn.style.transform = "translateX(0px)";
//             btn.style.backgroundColor = "lightblue";
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (element, distance, time, callback) => {
  setTimeout(() => {
    element.style.transform = `translateX(${distance}px)`;
    if (callback) {
      callback();
    }
  }, time);
};

moveX(btn, 200, 1000, () => {
  moveX(btn, 400, 1000, () => {
    moveX(btn, 600, 1000, () => {
      moveX(btn, 800, 1000);
    });
  });
});
