const express = require('express')
const path = require('path');
const app = express()


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Servidor Ativo")
})

app.get('/sistema', (req,res) =>{
    res.sendFile(path.join(__dirname, "public", "static.html")); 
    // Usa o caminho relativo

})

app.listen(3000, () =>{
    console.log("Listen Ativo")
})



