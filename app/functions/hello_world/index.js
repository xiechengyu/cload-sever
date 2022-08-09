const cloudbase = require("@cloudbase/node-sdk");
exports.main = async function () {
  if (cloudbase) {
    return "Happy Hack With Cloudbase!";
  } else {
    return "Hello World!";
  }
};