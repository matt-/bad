const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let out = eval(req.query.input);
    res.send(out);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})