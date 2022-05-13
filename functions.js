const path = require("path");
const fs = require("fs");
const https = require("https");
const clc = require("colors");

function validateUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => resolve(res)).on("error", (e) => reject(false));
  });
}

const validatePath = (pathUser) => {
  if(!fs.existsSync(pathUser)){
    console.log(clc.cyan('❈ ❇ ✻ La ruta ingresada es válida o no existe ✼ ❇ ❈'))
    process.exit()
  } else if (path.isAbsolute(pathUser)) {
    return pathUser;
  } else {
    const pathAbsolute = path.resolve(pathUser).normalize();
    return pathAbsolute;
  }
};

const browseDirectory = (pathUser) => {
  const separator =
    process.platform === "win32" || process.platform === "win64" ? "\\" : "/";
  let filesPath = [];
  if (fs.statSync(pathUser).isFile() && path.extname(pathUser) === ".md") {
    filesPath.push(pathUser);
  } else if (fs.statSync(pathUser).isDirectory()) {
    const directory = pathUser;
    let contentDirectory = fs.readdirSync(directory);
    contentDirectory.forEach((el) => {
      browseDirectory(pathUser + separator + el).forEach((el) => {
        filesPath.push(el);
      });
    });
  }
  else if (filesPath.length === 0) {
    console.log(clc.magenta("⁂ ⁑ ⁎ No se encontraron archivos markdown ⁎ ⁑ ⁂"));
    process.exit();
  }
  return filesPath;
};

const readMDfiles = (mdFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(mdFile, "utf-8", (error, data) => {
      //metodo de node que lee archvos
      if (error) return reject(error);
      else {
        resolve({
          route: mdFile,
          fileContent: data,
        });
      }
    });
  });
};

const objectLinks = (arrayMD) => {

let urls = []; //array para enlistar los links
let paths = []; //array para enlistar la ruta de los archivos.md
let objectResult = []; //este será mi objeto resultado

  return Promise.all(arrayMD.map(readMDfiles))
    .then((data) => {
      const regExpUrls = /!*\[(.+?)\]\((.+?)\)/gi;
      data.forEach((item) => {
        const urlsFound = item.fileContent.match(regExpUrls)
        if(urlsFound){
          urlsFound.forEach((url) => {
            urls.push(url);
            paths.push(item.route);
          })
        }
      });

      objectResult = urls.map((totalLink) => {
        let index = urls.indexOf(totalLink);
        const splitUrl = totalLink.split("](");
        const text = splitUrl[0].slice(1);
        const href = splitUrl[1].slice(0, -1);

        return {
          href,
          text: text.substring(0, 50),
          file: paths[index],
        };
      });
      return objectResult;
    })
    .catch((error) => console.error(error));
}

function createObjectValidate(data, optionsUser) {
  let urlValidatedList = data.map((object) =>
    validateUrl(object.href)
      .then((res) => {
        object.status = res.statusCode;
        object.ok =
          res.statusCode >= 200 && res.statusCode <= 399 ? "ok" : "fail";
      })
      .catch((error) => {
        object.status = error.code;
        object.ok = "fail";
      })
  );
  return Promise.all(urlValidatedList).then(() => {
    // Para mostrar la tabla con broken se debe esperar a que termine la validacion con .then
    if (optionsUser.stats) {
      const dataWithHref = getTotalLinks(data);
      const dataWithStatus = data.filter((object) => object.ok === "fail");
      unique = getLinksUnique(data);

      result = {
        Total: dataWithHref.length,
        Unique: unique.length,
        Broken: dataWithStatus.length,
      };
      return result;
    } else {
      return data;
      // console.log(clc.yellow('✾ ✽ ✼ ✻ Este es el resultado de la validación ✻ ✼ ✽ ✾', (clc.blue(data)))); //pinta aqui
    }
  });
}

function objectWithStats(data) {
  const dataWithHref = getTotalLinks(data);
  const unique = getLinksUnique(data);

  result = {
    Total: dataWithHref.length,
    Unique: unique.length,
  };
  return result
}

function getLinksUnique(data) {
  return [...new Set(data.map((object) => object.href))];
}

function getTotalLinks(data) {
  return data.filter((object) => object.hasOwnProperty("href"));
}


module.exports = {
  validateUrl,
  browseDirectory,
  validatePath,
  objectLinks,
  createObjectValidate,
  objectWithStats,

};
