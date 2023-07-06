"use strict";
// import React, { useState } from 'react';
// import { registerUsuario } from './functions';
// interface RegisterProps {
//   onRegisterSuccess: () => void;
// }
// const Register: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
//   const [dni, setDNI] = useState<number>(0);
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [error, setError] = useState('');
//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await registerUsuario(dni, role, confirmPassword, password);
//       // Aquí puedes realizar cualquier acción adicional después de un registro exitoso
//       onRegisterSuccess();
//     } catch (error) {
//       setError('Error al registrar');
//     }
//   };
//   return (
//     <div>
//       <h2>Registro</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleRegister}>
//         <input
//           type="number"
//           placeholder="DNI"
//           value={dni}
//           onChange={(e) => setDNI(Number(e.target.value))}
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         />
//         <button type="submit">Registrarse</button>
//       </form>
//     </div>
//   );
// };
// export default Register;
// /*
// function MyComponent() {
//     const [inputDNI, setInputDNI] = useState('');
//     const [inputPWD, setInputPWD] = useState('');
//     async function handleLogin () {
//         const isLoggedin = await login(Number(inputDNI), inputPWD);
//         if (isLoggedin) {
//             console.log("Inicio de sesion exitosos. ¡Bienvenido!");
//         } else {
//             console.log("No se pudo iniciar sesion, verifique que las credenciales sean correctas.");
//         }
//         await prisma.$disconnect();
//     }
//     return ()
// }
// const LoginPage: React.FC = () => {
//     const router = useRouter();
//     return (
//         <div>
//             <label htmlFor="DNI">
//                 DNI
//             </label>
//             <input type="number" name="DNI" />
//             <label htmlFor="pwd">
//                 Password
//             </label>
//             <input type="password" name="Pwd" />
//             <button type="submit">
//                 Login
//             </button>
//         </div>
//     );
// }; */
