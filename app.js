import express from 'express'

const app = express()

const port = 8000

app.get('/', (req, res) =>{
    res.send("Olá, Maria Gaby")
})

app.listen(port, () =>{
    console.log(`Estudando na porta ${port}`)
})