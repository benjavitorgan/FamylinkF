"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { InputDNI, InputPWD } from './logins';
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { old_person } = prisma;
const { f_member } = prisma;
const { nurse } = prisma;
const app = (0, express_1.default)();
const port = 3000;
//Funciones con querys
//Tabla persona mayor
/*
export const registerUser = async (dni: number, password: string, role: string): Promise <any> => {
    try {
        
        let result;
    
        switch (role) {
          case 'persona mayor':
            const user = await prisma.old_person.create({
              data: {
                dni,
                password,
              },
            });
            result = user;
            break;
          case 'familiar':
            const fam = await prisma.f_member.create({
              data: {
                dni,
                password,
              },
            });
            result = fam;
            break;
          case 'enfermero':
            const nurse = await prisma.nurse.create({
              data: {
                dni: dni,
                passwoerd: password,
                },
            });
            result = nurse;
            break;
          default:
            throw new Error('Seleccione un rol');
        }
        console.log('se registro correctamente: ', result)
        return result;
    } catch (error) {throw new Error('Error al crear el usuario');}
}*/
/*
async function CreateFM() {
    try {
        const newUser = await f_member.create({
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

async function CreateNurse() {
    try {
        const newUser = await nurse.create({
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
*/
/*
async function CheckDni () {
    try {
        const user = await prisma.old_person.findUnique({
            where: {
                dni: InputDNI,
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

//CheckDni();

async function login (dni: number, password: string): Promise<boolean> {
    const user = await prisma.famylink.findUnique({ where: {dni} });

    if (user && user.password === password) {
        return true;
    } else {
        return false;
    }
}

//let InputDNI = 46756340;
//let InputPWD = "12345";

async function main () {
    const isLoggedin = await login (InputDNI, InputPWD);

    if (isLoggedin) {
        console.log("Inicio de sesion exitoso. ¡Bienvenido!");
    } else {
        console.log("No se pudo iniciar sesion, verifique que las credenciales sean correctas");
    }

    await prisma.$disconnect();
}

main ().catch((error) => {
    console.error(error);
    process.exit(1);
})
*/
// Get y posts
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/LoginUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    (0, functions_1.loginUsuario)(data.dni, data.pass);
}));
app.post('/api/CrearUsuario', (req, res) => {
    //Extract data from the request body
    const data = req.body;
    (0, functions_1.registerUsuario)(data.name, data.dni, data.email, data.confirm, data.pass, data.rol);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
