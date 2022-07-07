import React from 'react'

const Menu = (props) => {

  function cerrarSesion() {

    document.getElementById('caja_menu').style.display = 'none';
    document.getElementById('form-login').style.display = 'block';
    document.getElementById("txtusu").value = '';
    document.getElementById("txtpas").value = '';
    document.getElementById("txtusu").focus();
  }

  return (

    <>

      <div id="caja_menu" style={{ textAlign: "center" }}>

        <strong className="h3">
          Bienvenido Usuario: {props.usu}
        </strong>

        <nav style={{ marginTop: 20 }}>
          <div>
            <a style={{ color: "blue" }} href=" " onClick={cerrarSesion}  >Cerrar Sesión</a>
          </div>
        </nav>
      </div>

    </>

  )
}

export default Menu