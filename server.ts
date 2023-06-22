import { PrismaClient } from '@prisma/client'
import express from 'express';

const prisma = new PrismaClient()
const app = express();
const port = 3000;

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