const validatePath = require('../functions.js').validatePath;
const browseDirectory = require('../functions.js').browseDirectory;
const objectLinks = require('../functions.js').objectLinks;

  describe("path", () => {
    it("es una función", () => {
      expect(typeof validatePath).toBe("function");
    });
  
    test("recibe una ruta relativa y la convierte a absoluta", () => {
      let userPathTest = 'DirectorioPrueba/ejemploPrueba.md';
      let result = 'C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\ejemploPrueba.md';
      return expect(validatePath(userPathTest)).toEqual(result);
    })
    test("recibe un archivo valida si es .md, si es un directorio lo recorre y encuentra archivos .md, si lo es, entonces lo almacena en un array", () => {
      let userDirectoryTest = 'DirectorioPrueba';
      let result = [
        "DirectorioPrueba\\carpetaUno\\prueba.md",
        "DirectorioPrueba\\carpetaUno\\pruebaDos.md",
        "DirectorioPrueba\\ejemploPrueba.md",
      ]
      return expect(browseDirectory(userDirectoryTest)).toEqual(result);
    })
    test("valida los archivos .md, y encuentra links, los cuales almacena en un objeto", () => {
      let arrayTest = [
        'C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\prueba.md'
      ]
      let objectExpect = [
        {
          href: 'https://www.youtube.com/watch?v=_Kqtj14rxes',
          text: 'Youtube',
          file: 'C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\prueba.md'
        },
        {
          href: 'https://www.facebook.com/roxysolano',
          text: 'Facebook',
          file: 'C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\prueba.md'
        }
      ]
      
      return objectLinks(arrayTest).then((array)=> {
        expect(array).toStrictEqual(objectExpect)
      })
  })
})
