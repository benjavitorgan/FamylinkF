export {registerUsuario, loginUsuario};
const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient();
const {old_person, f_member, nurse} = prisma;

async function registerUsuario(name: string, dni: number, email: string, confirmPassword: string, password: string, Rol: string) {
    try {
      if (password !== confirmPassword) {
        console.log("La confirmación de contraseña no coincide.");
        return;
      }
  
      const existingMailPM = await old_person.findUnique({
        where: { dni },
      });
  
      const existingMailFM = await f_member.findUnique({
        where: { dni },
      });

      const existingMailEnfermero = await nurse.findUnique({
        where: { dni },
      });
  
      if (existingMailPM || existingMailFM || existingMailEnfermero) {
        console.log("El correo electrónico ya está registrado para un médico o paciente.");
        return;
      }
  
      let newUsuario;
      if (Rol === "PersonaMayor") {
        newUsuario = await old_person.create({
          data: {
             dni: dni,
             name: name,
             email: email,
             password: password,
          },
        });
        console.log("Persona mayor registrado:", newUsuario);
      } else if (Rol === "Familiar") {
        newUsuario = await f_member.create({
          data: {
             dni: dni,
             name: name,
             email: email,
             password: password,
          },
        });
        console.log("Familiar registrado:", newUsuario);
      } else if (Rol === "Enfermero") {
        newUsuario = await nurse.create({
          data: {
             dni: dni,
             name: name,
             email: email,
             password: password,
          },
        });
        console.log("Enfermero registrado:", newUsuario);
      } else {
        console.log("Rol de usuario no válido.");
        return;
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    } finally {
      await prisma.$disconnect();
    }

}

async function loginUsuario(dniObt: number, passwordObt: string) {
     try {
         const user = await prisma.old_person.findUnique ({
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
           } else {
            console.log("La contraseña es incorrecta.");
           }
         } else {
          console.log("No hay una cuenta registrada con este dni.");
         }

     } catch (error) {
        console.error("Error al registrar usuario:", error);
      }
     finally {await prisma.$disconnect();}
}