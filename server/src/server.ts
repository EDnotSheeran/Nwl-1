import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    console.log('Listagem de Usuarios')

    // JSON

    res.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Daniel'
    ])
})  

app.listen(3333)

