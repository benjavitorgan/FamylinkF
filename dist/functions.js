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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsuario = exports.registerUsuario = void 0;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { old_person, f_member, nurse } = prisma;
function registerUsuario(name, dni, email, confirmPassword, password, Rol) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (password !== confirmPassword) {
                console.log("La confirmación de contraseña no coincide.");
                return;
            }
            const existingMailPM = yield old_person.findUnique({
                where: { dni },
            });
            const existingMailFM = yield f_member.findUnique({
                where: { dni },
            });
            const existingMailEnfermero = yield nurse.findUnique({
                where: { dni },
            });
            if (existingMailPM || existingMailFM || existingMailEnfermero) {
                console.log("El correo electrónico ya está registrado para un médico o paciente.");
                return;
            }
            let newUsuario;
            if (Rol === "PersonaMayor") {
                newUsuario = yield old_person.create({
                    data: {
                        dni: dni,
                        name: name,
                        email: email,
                        password: password,
                    },
                });
                console.log("Persona mayor registrado:", newUsuario);
            }
            else if (Rol === "Familiar") {
                newUsuario = yield f_member.create({
                    data: {
                        dni: dni,
                        name: name,
                        email: email,
                        password: password,
                    },
                });
                console.log("Familiar registrado:", newUsuario);
            }
            else if (Rol === "Enfermero") {
                newUsuario = yield nurse.create({
                    data: {
                        dni: dni,
                        name: name,
                        email: email,
                        password: password,
                    },
                });
                console.log("Enfermero registrado:", newUsuario);
            }
            else {
                console.log("Rol de usuario no válido.");
                return;
            }
        }
        catch (error) {
            console.error("Error al registrar usuario:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.registerUsuario = registerUsuario;
function loginUsuario(dniObt, passwordObt) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.old_person.findUnique({
                where: {
                    dni: dniObt
                },
                select: {
                    dni: true,
                    password: true
                }
            });
            if (user.dni === true) {
                if (user.password === passwordObt) {
                    console.log("¡Bienvenido!");
                }
                else {
                    console.log("La contraseña es incorrecta.");
                }
            }
            else {
                console.log("No hay una cuenta registrada con este dni.");
            }
        }
        catch (error) {
            console.error("Error al registrar usuario:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.loginUsuario = loginUsuario;
