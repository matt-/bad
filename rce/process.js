const express = require('express')
const { exec } = require('child_process');

const app = express()
const port = 3000

app.get('/ping', (req, res) => {
    let ip = req.query.ip;

    let command = `ping -c 4 ${ip}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).send({ error: error.message });
        }
        res.send({ stdout, stderr });
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})