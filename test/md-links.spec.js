const mdLinks = require('../index.js').mdLinks;


describe('mdLinks', () => {

  it("Al ejecutar la función mdLinks con option false, la función retorna solo el objeto con 3 keys: href, text, file", () => {

    let pathTest = 'DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md'
    
    let objectExpect = [{
      href: 'https://www.youtube.com/watch?v=_Kqtj14rxes',
      text: 'Youtube',
      file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md"
    },
    {
      href: 'https://www.facebook.com/roxysolano',
      text: 'Facebook',
      file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md"
    },
    ]
    
    return mdLinks(pathTest, {validate: false}).then((arrayObjects)=> {
      expect(arrayObjects).toStrictEqual(objectExpect)
    })
});

// it("Al ejecutar la función mdLinks con option true, la función retorna solo el objeto con 5 keys: href, text, file, status, ok", () => {

//   let pathTest = 'DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md'
  
//   let objectExpect = [{
//     file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md",
//     href: 'https://www.youtube.com/watch?v=_Kqtj14rxes',
//     ok: 'ok',
//     status: 200,
//     text: 'Youtube'
//   },
//   {
//     file: "C:\\Users\\LABORATORIA\\OneDrive\\Escritorio\\LABORATORIA\\BOG004-md-links\\DirectorioPrueba\\carpetaUno\\directorio.md\\prueba.md",
//     href: 'https://www.facebook.com/roxysolano',
//     ok: 'ok',
//     status: 302,
//     text: 'Facebook'
//   },
//   ]
  
//   return mdLinks(pathTest, {validate: '--v'}).then((arrayObjects)=> {
//     expect(arrayObjects).toBe(objectExpect)
//   })
// })

})
