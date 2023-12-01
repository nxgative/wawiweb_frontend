import { useState } from "react";
import './Welcome.css'
import RegisterModal from "../profile/Modal.jsx";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import Login from "../profile/Login.jsx";

export default function Welcome() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [vis, setVis] = useState(false);

  function handleChange(value, type) {
    if (type === "user") {
      setUser(value);
    }
    else if (type === "password") {
      setPassword(value);
    }
  }

  function visibility() {
    var x = document.getElementById("p2");
    if (x.type === "password") {
      x.type = "text";
      setVis(true);
    } else {
      x.type = "password";
      setVis(false);
    }
  }

  return (
    <>
      <div className="main-div">
        <div className="main-div2">
          <div className="imagen-div">
            <img src="/images/calendar2.png" className="imageb" alt="imagen" />
          </div>
          <div className="login-info-div">
            <h1>Login</h1>
            <div className="user-info-div">
              <h3 className="label"> Usuario:</h3>
              <input
                placeholder="Nombre de usuario"
                onChange={u => handleChange(u.target.value, "user")}
              />
            </div>
            <div className="password-info-div">
              <h3 className="label">Contraseña:</h3>
              <div className="password-container">
                <input id="p2" type={vis ? "text" : "password"} placeholder="Contraseña alfanumérica"
                onChange={(c) => handleChange(c.target.value, "password")} />
                <div className="eye-icon" onClick={() => setVis(!vis)}>
                  {vis ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
            </div>

            <div className="links-div">
              <Login username={user} password={password} />
            </div>
            <RegisterModal />

          </div>
        </div>
        <div className="frase-div">
          <h2> ¡Organiza tus tareas y planifica con amigos!</h2>
        </div>
      </div>
    </>
  )
}
