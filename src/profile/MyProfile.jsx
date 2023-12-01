import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import './MyProfile.css';
import LogoutButton from './Logout';

const MyProfile = () => {
  const { token } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    nombre: '',
    mail: '',
    newPassword: '', // Nuevo campo para la nueva contraseña
  });
  const [currentPassword, setCurrentPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          console.log('token', token);
          const userId = IdToken(token);
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuario/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserData({
            nombre: response.data.nombre || '',
            mail: response.data.mail || '',
            newPassword: response.data.newPassword || '',
          });
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (token) {
        const userId = IdToken(token);

        // Actualizar datos del usuario con verificación de contraseña
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/usuario/actualizar`,
          {
            userId,
            newName: userData.nombre, // Cambiado de nombre
            newEmail: userData.mail, // Cambiado de nombre
            newPassword: userData.newPassword,
            currentPassword: currentPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMessage(response.data.message);
        console.log('Actualización exitosa.');
      }
    } catch (error) {
      setMessage(error.response.data.message);
      console.error('Error al actualizar datos del usuario:', error);
    }
  };

  const IdToken = (token) => {
    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const userId = tokenPayload.sub;

      return userId;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  };

  return (
    <div className='my-profile-container'>
      <div className='my-profile'>
        <h2>Mi Perfil</h2>
        <form onSubmit={handleSubmit}>
          <div className='main-container'>
            <div className='text-container'>
              <h3>Nuevo Nombre:</h3>
              <h3>Nuevo Mail:</h3>
              <h3>Nueva Contraseña:</h3>
              <h3>Contraseña Actual: *</h3>
            </div>
            <div className='input-container'>
              <input
                type="text"
                name="nombre"
                value={userData.nombre}
                onChange={handleChange}
              />
              <input
                type="email"
                name="mail"
                value={userData.mail}
                onChange={handleChange}
              />
              <input
                type="password"
                name="newPassword"
                value={userData.newPassword}
                onChange={handleChange}
              />
              <input
                type="password"
                name="currentPassword"
                value={currentPassword}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button>Guardar Cambios</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      <div className='logout-container'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <LogoutButton />
      </div>
    </div>
  );
};

export default MyProfile;
