import React, { useState } from 'react';
import { useToken } from './auth';
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {
    const [login] = useToken();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async e => {
        e.preventDefault();
        await login(username, password);
        navigate('/');
    };

    return (
        <div style={{ paddingBottom: '150px' }} className="row">
            <div className="offset-3 col-6">
                <div className="b_cards shad_intense p-4 rounded mt-4 heliotrope_gray">
                    <h1 className="nameText pb-3">Log in!</h1>
                    <form onSubmit={handleSubmit} id="create-Login-form">
                        <div className="inputText form-floating mb-3">
                            <input onChange={e => setUsername(e.target.value)} placeholder="Username" type="text" id="username" value={username} className="siteText form-control" />
                            <label htmlFor="name">Username</label>
                        </div>
                        <div className="inputText form-floating mb-3">
                            <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" id="password" value={password} className="siteText form-control" />
                            <label htmlFor="name">Password</label>
                        </div>
                        <button className="btn siteText almond ob_button">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );

};

