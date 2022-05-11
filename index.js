const {
  browseDirectory,
  validatePath,
  objectLinks,
  createObjectValidate,
  objectWithStats
} = require("./functions.js");

var clc = require('cli-color');

let response = {
    data: [],
    errors: ''
  }

  function mdLinks(path = "", optionsUser = { validate: false, stats : '' }) {
    return new Promise((resolve, reject) => {
      const pathAbsolute = validatePath(path);
      const readDirectory = browseDirectory(pathAbsolute);
      objectLinks(readDirectory)
      .then((resolve) => {
        response.data = resolve;
      })
      .then (() => {
        if (optionsUser?.validate === "--validate" || optionsUser?.validate === "--v") {
          createObjectValidate(response.data, optionsUser)          
        }else if ((optionsUser?.validate !== "--validate" || optionsUser?.validate !== "--v") && (optionsUser?.stats ==="--stats" || optionsUser?.stats === "--s")) {
            objectWithStats(response.data)
        }else {
          if (!response.errors) {
            console.log((response.data))
          } else {
            reject(response.errors);
          }
        }
      })
    });
  }

module.exports = {
  mdLinks
}