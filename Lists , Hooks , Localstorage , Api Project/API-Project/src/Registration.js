import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword ,} from "firebase/auth";
import firebaseApp from './firebase';
const Registration = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setdata] = useState([]);

    const navigate = useNavigate();

    const auth = getAuth(firebaseApp);

    const register = async () => {
        try {
           
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/product');  
        } catch (err) {
         console.log(err)
        }
    };

    return (
        <div className="container">
            <form className="registration-form">
                <h2>Register</h2>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={register}>Register</button>
            </form>
        </div>
    );
}

export default Registration;