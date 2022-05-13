const { mdLinks } = require("../index.js");

describe("mdLinks", () => {
  it("es una función", () => {
    expect(typeof mdLinks).toBe("function");
  });

  let pathTest =
    "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno";

  it("recibe una ruta de un archivo o directorio, evalua si contiene archivos md, y examina archivo por archivo para encontrar si hay links en dichos documentos, con opción validate false", (done) => {
    mdLinks(pathTest, {}).then((result) => {
      const resultTest = [
        {
          href: "https://www.youtube.com/watch?v=_Kqtj14rxes",
          text: "Youtube",
          file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\prueba.md",
        },
        {
          href: "https://www.facebook.com/roxysolano",
          text: "Facebook",
          file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\prueba.md",
        },
      ];
      expect(result).toEqual(resultTest);
      done();
    });
  });

  test("recibe una ruta de un archivo o directorio, evalua si contiene archivos md, y examina archivo por archivo para encontrar si hay links en dichos documentos, con opción validate true", (done) => {
    mdLinks(pathTest, { validate: true }).then((result) => {
      const resultTest = [
        {
          href: "https://www.youtube.com/watch?v=_Kqtj14rxes",
          text: "Youtube",
          file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\prueba.md",
          status: 200,
          ok: "ok",
        },
        {
          href: "https://www.facebook.com/roxysolano",
          text: "Facebook",
          file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\prueba.md",
          status: 302,
          ok: "ok",
        },
      ];
      expect(result).toEqual(resultTest);
      done();
    });
  });

  test("recibe una ruta de un archivo o directorio, evalua si contiene archivos md, y examina archivo por archivo para encontrar si hay links en dichos documentos, con opción stats true", (done) => {
    mdLinks(pathTest, { stats: true }).then((result) => {
      const resultTest = { Total: 2, Unique: 2 };
      expect(result).toEqual(resultTest);
      done();
    });
  });

  test("recibe una ruta de un archivo o directorio, evalua si contiene archivos md, y examina archivo por archivo para encontrar si hay links en dichos documentos, con opción stats true validate true", (done) => {
    mdLinks(pathTest, { validate: true, stats: true }).then((result) => {
      const resultTest = { Total: 2, Unique: 2, Broken: 0 };
      expect(result).toEqual(resultTest);
      done();
    });
  });
});
