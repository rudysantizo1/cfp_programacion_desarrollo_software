const http = require('node:http')
const path = require('node:path')
const { readFile } = require('node:fs/promises')
const os = require('node:os')
const fs = require('fs/promises')

let archivos = []

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset-utf-8')

  if (req.url == '/') {
    res.statusCode = 200
    let newPath = path.join(
      os.homedir(),
      'Desktop',
      'Programacion_cfp/Modulo 2/Node/ejemplos/'
    )

    fs.readdir(newPath)
      .then(files => {
        files.forEach(file => {
          promesas(file);
        })
      })
      .catch(err => {
        console.error(`Error reading directory: ${err.message}`) // Access error message directly
      })
    
      async function promesas(file) { 
        try {
          if(path.extname(file) == '.txt'){
            res.write(`<p>${await readFile(`../${file}`, 'utf-8')}</p>`)
          }
          
        } catch (error) {
          console.error(`no se econtro nadaddddd ${error}`)
        }
      
      }

      

    res.write('<h1>HeWORLD xddd :D</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})

function reading (newPath) {}
