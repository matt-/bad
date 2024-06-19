const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    json = JSON.stringify({ "data": req.query.input });
    res.send(json);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})