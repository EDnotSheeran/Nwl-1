# Nwl-1

### migrations
`px knex migrate:latest --knexfile knexfile.ts migrate:latest`

###### Server.ts
```import express from 'express'
const app = express()

// Rota: Enderaço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informaçoes do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Cria um usuário
// GET http://localhost:3333/users = Lista usuários
// GET http://localhost:3333/users/5 = Busca dados do usuário com ID 5
// POST http://localhost:3333/users = cria um usuario

const users = [
    'Diego', // 0
    'Cleiton', // 1
    'Robson', // 2
    'Daniel' // 3
]

app.get('/users',(request, response)=>{
    const search = String(request.query.search)

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users

    return response.json(filteredUsers)
})

app.get('/users/:id',(request, response)=>{
    const id = Number(request.params.id)

    return response.json(users[id])
})

app.post('/users',(request, response)=>{
    const user = {
        name: 'Edson',
        email: 'edson.junior@aluno.ifsp.edu.br'
    }

    return response.json(user)
})

app.listen(3333)```