const express = require('express')
const path = require('path');
const app = express()


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Servidor Ativo")
})

app.get('/sistema', (req,res) =>{
    res.sendFile("C:/Users/CARLOS/Desktop/TAILWIND/public/static.html")
})

app.listen(3000, () =>{
    console.log("Listen Ativo")
})



