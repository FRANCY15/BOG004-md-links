const cliColor = require("cli-color");
const {
  browseDirectory,
  validatePath,
  objectLinks,
  createObjectValidate,
  objectWithStats,

} = require("./functions.js");

let response = {
    data: [],
    errors: ''
  }

  function mdLinks(path = "", optionsUser = { validate: false, stats : false }) {
    return new Promise((resolve, reject) => {
      const pathAbsolute = validatePath(path);
      const readDirectory = browseDirectory(pathAbsolute);
      objectLinks(readDirectory)
      .then((resolve) => {
        response.data = resolve;
      })
      .then (() => {
        if (optionsUser.validate) {
          resolve(createObjectValidate(response.data, optionsUser)
          .then((resp) => resp))
        }else if (optionsUser.stats) {
            resolve(objectWithStats(response.data))
        }else {
          if (!response.errors) {
            resolve(response.data)
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