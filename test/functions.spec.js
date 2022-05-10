const validatePath = require('../functions.js').validatePath;
const browseDirectory = require('../functions.js').browseDirectory;
const objectLinks = require('../functions.js').objectLinks

  describe("path", () => {
    it("es una función", () => {
      expect(typeof validatePath).toBe("function");
    });
  
    it("recibe una ruta relativa y la convierte a absoluta", () => {
      let userPathTest = 'DirectorioPrueba/ejemploPrueba.md';
      let result = 'C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\ejemploPrueba.md';
      return expect(validatePath(userPathTest)).toEqual(result);
    })
    it("recibe un archivo valida si es .md, si es un directorio lo recorre y encuentra archivos .md, si lo es, entonces lo almacena en un array", () => {
      let userDirectoryTest = 'DirectorioPrueba';
      let result = [
        'DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md',    
        'DirectorioPrueba\\ejemploPrueba.md'
      ]
      return expect(browseDirectory(userDirectoryTest)).toEqual(result);
    })
    it("valida los archivos .md, y encuentra links, los cuales almacena en un objeto", () => {
      let arrayTest = [
        'DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md'
      ]
      let objectExpect = [{
        href: 'https://www.youtube.com/watch?v=_Kqtj14rxes',
        text: 'Youtube',
        file: 'DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md'
      },
      {
        href: 'https://www.facebook.com/roxysolano',
        text: 'Facebook',
        file: 'DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md'
      },
      ]
      
      return objectLinks(arrayTest).then((arrayTest)=> {
        expect(arrayTest).toStrictEqual(objectExpect)
      })
  })
})