import React, { useState } from 'react';
import { useToken } from './auth';

export default function SignUpForm() {
  const [, , signup] = useToken();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    await signup(username, password, email, firstName, lastName);
  };
  return (
    <div style={{ paddingBottom: '150px' }} className="row">
      <div className="offset-3 col-6">
        <div className="b_cards shad_intense p-4 rounded mt-4 heliotrope_gray">
          <h1 className="nameText pb-3">Sign up for your subscription box!</h1>
          <form onSubmit={handleSubmit} id="create-signup-form">
            <div className="inputText form-floating mb-3">
              <input onChange={e => setUsername(e.target.value)} placeholder="Username" type="text" id="username" value={username} className="siteText form-control" />
              <label htmlFor="name">Username</label>
            </div>
            <div className="inputText form-floating mb-3">
              <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" id="email" value={email} className="siteText form-control" />
              <label htmlFor="name">Email address</label>
            </div>
            <div className="inputText form-floating mb-3">
              <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" id="password" value={password} className="siteText form-control" />
              <label htmlFor="name">Password</label>
            </div>
            <div className="inputText form-floating mb-3">
              <input onChange={e => setFirstName(e.target.value)} placeholder="FirstName" type="text" id="firstName" value={firstName} className="siteText form-control" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="inputText form-floating mb-3">
              <input onChange={e => setLastName(e.target.value)} placeholder="LastName" type="text" id="lastName" value={lastName} className="siteText form-control" />
              <label htmlFor="first_name">Last Name</label>
            </div>
            <div className="inputText form-floating mb-3">
              <input onChange={e => setAddress(e.target.value)} placeholder="Address" type="text" id="address" value={address} className="siteText form-control" />
              <label htmlFor="first_name">Address</label>
            </div>
            <button className="btn btn-light siteText almond ob_button">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};
