import React from 'react'
import '../logincss.css';
import './jslogin.js'

const Login = () => {
  return (

    <div className="container">


      <h1>LOGIN</h1>
      <form >
        <div className="form-control">
          <input type="text" required />
          <label for="">Correo electronico</label>
        </div>
        <div className="form-control">
          <input type="password" required />
          <label for="">Contraseña</label>
        </div><br />

        <input type="submit" className="btn" value="Login" />

      </form>

    </div>

  )
}



export default Login