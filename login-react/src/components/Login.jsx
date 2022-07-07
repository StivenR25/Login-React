import React, { useState } from 'react'
// sirve para importar las distintas carpetas que se usaran en este modulo
import Menu from './Menu';
import '../logincss.css';
import '../jslogin'

export const Login = () => {
  const [miLogin, setMilogin] = useState("false");
  const [usu, setusu] = useState("");
  const [pas, setpas] = useState("");
// esta funcion es la encargada de autentificar el correo y la contraseña para poder avanzar
  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("Completar los campos faltantes");
    } else {
      if (usu === "Admin" && pas === "12345") {
        setMilogin("true");
        document.getElementById("form-login").style.display = "none";
      } else {
        setMilogin("false");
        alert("Error de usureo o contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (

    <div className="container">


      
      <form id='form-login'>
      <h1>Iniciar Sesión</h1>
        <div className="form-control">
          <input type="text" id='txtusu' onChange={(e) => setusu(e.target.value)} required />
          <label>Usuario</label>
        </div>
        <div className="form-control">
          <input type="password" id='txtpas' onChange={(e) => setpas(e.target.value)} required />
          <label>Contraseña</label>
        </div><br />

        <input type="submit" className="btn" value="Enviar" onClick={ iniciarSesion} />

      </form>
    { miLogin === "true" && <Menu usu={usu} />}
    </div>

  )
}



export default Login