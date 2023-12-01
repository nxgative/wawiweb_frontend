import './Feedback.css'
import { useState, useEffect } from "react";
import ReactStars from 'react-rating-stars-component'
import { CiStar } from "react-icons/ci";
import axios from "axios";
import { FaDeleteLeft } from "react-icons/fa6";

export default function Feedback() {
    const [rating, setRating] = useState(3);
    const [text, setText] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const [id, setId] = useState("");
    const [info, setInfo] = useState([]);
    const token = localStorage.getItem("token");

    const IdToken = (token) => {
        try {
            const tokenPayload = JSON.parse(atob(token.split('.')[1]));
            const userId = tokenPayload.sub;
            setId(userId);
            console.log(userId);
        } catch (error) {
            console.error('Error al decodificar el token:', error);
            return null;
        }
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    function handleChange(value) {
        setText(value);
    }

    const FeedbackInfo = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/feedback`);
            const responseData = response.data;

            const infoWithUserName = await Promise.all(responseData.map(async (feedback) => {
                const name = await GetUserById(feedback.id);
                // console.log(name);
                return { ...feedback, name: name };
            }));
            // console.log(infoWithUserName);
            setInfo(infoWithUserName);
        } catch (error) {
            console.error('Error:', error);
        }
    }



    useEffect(() => {
        IdToken(token);
        FeedbackInfo();
    }, []);

    function GetUserById(id) {
        return axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuario/${id}`)
            .then((response) => {
                // console.log(response.data.nombre);
                return response.data.nombre;
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    const handleClickEnviar = async (event) => {
        event.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/sent`, {
            id: id,
            rating: rating,
            description: text,
        })
            .then((response) => {
                setError(false);
                setMsg("Agradecemos tu mensaje! :)");
                window.location.reload();
            })
            .catch((error) => {
                console.log(id, rating, text);
                setError(true);
                setMsg(
                    <>
                        Ha ocurrido un error al intentar ingresar sus comentarios.
                        <br />
                        Por favor, intentelo nuevamente.
                        <br />
                        *Solamente un comentario por usuario
                    </>
                );
                console.error('Error:', error);
            });
    };

    const handleDeleteFeedback = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/feedback/${id}`);
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <>
            {id === '0' && (<div className='adminRole'> Mantenimiento Feedbacks </div>)}
            <div className='all'>
                <div className='table-container'>
                    <table className='bordered-table'>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Rating</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.name}</td>
                                    <td>{usuario.rating}</td>
                                    <td>{usuario.description}</td>

                                    {id === '0' && (<td className='AdminDEL' onClick={() => handleDeleteFeedback(usuario.id)}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DELETE <FaDeleteLeft color='purple' /></td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
            {id && id !== '0' &&
                (<div className='user'>
                    <form onSubmit={handleClickEnviar} className="Postform">
                        <div className="cute_div">
                            <h1> ¡Queremos saber tu opinión! </h1>
                            <h2> ¿Tienes alguna sugerencia o comentario? </h2>
                        </div>
                        <br />
                        <div className='ratingSystem'>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                emptyIcon={<CiStar />}
                                filledIcon={<CiStar fill='purple' />}
                                activeColor="#ffd700"
                            // isHalf={true}
                            // filledIcon={<CiStar />}
                            // halfIcon={<CiStar />}
                            />
                        </div>
                        <div className='feedback'>
                            <textarea placeholder="Escribe tu comentario aquí en 100 carácteres." maxLength={100} minLength={3} rows={2}
                                cols={30} onChange={(t) => handleChange(t.target.value)} />
                        </div>
                        <button type='submit'> Enviar  </button>
                    </form>
                    {msg}
                </div>)
            }
        </>
    )
}