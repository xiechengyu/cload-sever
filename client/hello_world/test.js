const cloudbase = require("@cloudbase/node-sdk");
const app = cloudbase.init({
  env: "lam-kxlb70p4"
});
// app
//   .callFunction({
//     // 云函数名称
//     name: "hello_world",
//     // 传给云函数的参数
//     data: {
//       a: 1
//     }
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(console.error);

app
  .callFunction({
    name: "node-app"
  })
  .then((res) => {
    console.log(res.result); // 'Happy Hack With Cloudbase!'
  });