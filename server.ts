import { getPrismaClient } from '@prisma/client/runtime';
//import express from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { old_person } = prisma;
//const app = express();
//const port = 3000;

//Funciones con querys

async function CreateUser() {
    try {
        const newUser = await old_person.create({
            data: {
             dni: "",
             name: "",
             lastname: "",

            },
        });
        console.log("Usuario creado:", newUser);
    } catch (error) {
        console.error ("Error al crear usuario:", error);
    }
    finally {await prisma.$disconnect();}
}

let tdni = 46756340

async function CheckDni () {
    try {
        const user = await prisma.old_person.findUnique({
            where: {
                dni: tdni,
            },
            select: {
                dni: true,
                password: true,
            },
        });

        if (user) {
            console.log("Usuario encontrado, bienvenido:", user.dni, user.password);
        } else {
            console.log("Usuario no encontrado");
        } 
    } catch (error) {
        console.error ("Error al encontrar usuario:", error);
    } finally {await prisma.$disconnect();}
}

// Get y posts
/*
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getUsers', async (req, res) => {
    const users = await prisma.user.findMany();

    console.log(users);
    res.json(users);
});

app.post('/api/endpoint', (req, res) => {
    //Extract data from the request body
    const {param1, param2} = req.body;

    //Process the data (ex, store in a database, perform calculations)

    //Send a response back to the front-end
    //Los tokens

    res.json({message: 'POST request received succesfully!'});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

*/