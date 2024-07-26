const express = require('express');
const run = require('./consultas')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://192.168.52.79:${port}`)
  run(`SELECT 'Hola'  AS saludo, :id AS id
         FROM dual

         UNION

         SELECT 'Hola' AS saludo, 109 AS id
         FROM dual`,
        [103]);
})
