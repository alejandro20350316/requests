const express = require ('express')

const app = express()
//createhttp://localhost:3000/Alejandro/123
app.get('/', (req, res) =>{
    res.json({msg: 'Hello Get'})
})
    app.get('/:user/:password', (req, res) =>{
    const {user, password} = req.params
    if(user === 'Alejandro' && password === '123'){
        res.json({msg: 'Inicio de sesion exitoso'})
        return
    }
 res.json({msg: 'Fallo el usuario o contraseña'})
})

app.post('/', (request, response) =>{
    response.json("Hola POST")
})
app.put('/', (request, response) =>{
    response.json("Hola PUT")
})
app.patch('/', (request, response) =>{
    response.json("Hola PATCH")
})
app.delete('/', (request, response) =>{
    response.json("Hola DELETE")
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})