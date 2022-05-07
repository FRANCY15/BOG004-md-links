const validatePath = require('../functions.js').validatePath;
const browseDirectory = require('../functions.js').browseDirectory;

  describe("path", () => {
    it("es una función", () => {
      expect(typeof validatePath).toBe("function");
    });
  
    it("recibe una ruta relativa y la convierte a absoluta", () => {
      let userPathTest = 'DirectorioPrueba/ejemploPrueba.md';
      let result = 'C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\ejemploPrueba.md';
      return expect(validatePath(userPathTest)).toEqual(result);
    })
});