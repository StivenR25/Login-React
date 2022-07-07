import React, { useState } from 'react'
import Menu from './Menu';

import '../logincss.css';
import '../jslogin'

export const Login = () => {
  const [miLogin, setMilogin] = useState("false");
  const [cor, setcor] = useState("");
  const [pas, setpas] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    var txtcor = document.getElementById("txtcor").value;
    var txtpas = document.getElementById("txtpas").value;
    if (txtcor.length === 0 || txtpas.length === 0) {
      alert("Completar los campos faltantes");
    } else {
      if (cor === "admin@gmail.com" && pas === "12345") {
        setMilogin("true");
        document.getElementById("form-login").style.display = "none";
      } else {
        setMilogin("false");
        alert("Error de correo o contraseña");
        document.getElementById("txtcor").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtcor").focus();
      }
    }
  }

  return (

    <div className="container">


      
      <form id='form-login'>
      <h1>Iniciar Sesión</h1>
        <div className="form-control">
          <input type="text" id='txtcor' onChange={(e) => setcor(e.target.value)} required />
          <label for="">Correo electronico</label>
        </div>
        <div className="form-control">
          <input type="password" id='txtpas' onChange={(e) => setpas(e.target.value)} required />
          <label for="">Contraseña</label>
        </div><br />

        <input type="submit" className="btn" value="Enviar" onClick={ iniciarSesion} />

      </form>
    { miLogin === "true" && <Menu cor={cor} />}
    </div>

  )
}



export default Login