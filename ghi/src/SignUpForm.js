import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_verify: '',
      first_name: '',
      last_name: '',
      address: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const newState = {};
    if (event.target.password === event.target.password_verify) {
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    } else {
      // they must go back and fix so that passwords match
    }
  }

  // do I need a componentDidMount function? Not yet sure what that component would be here.

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};

    const signUpUrl = 'http://localhost:8090/api/signup/';     // what port do we use here?
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(signUpUrl, fetchConfig);
    if (response.ok) {
      const newSignUp = await response.json();
      console.log(newSignUp);
      this.setState({
        username: '',
        email: '',
        password: '',
        password_verify: '',
        first_name: '',
        last_name: '',
        address: '',
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Sign up for your subscription box!</h1>
            <form onSubmit={this.handleSubmit} id="create-signup-form">

              <div className="form-floating mb-3">
                <input onChange={this.handleChange} value={this.state.name} placeholder="Username" type="text" id="username" className="form-control" />
                <label htmlFor="name">Username</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChange} value={this.state.name} placeholder="Email address" type="text" id="email" className="form-control" />
                <label htmlFor="name">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChange} value={this.state.name} placeholder="Password" type="text" id="password" className="form-control" />
                <label htmlFor="name">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={this.handleChange} value={this.state.name} placeholder="Enter password again" type="text" id="password_verify" className="form-control" />
                <label htmlFor="name">Enter password again</label>
              </div>


              <div className="form-floating mb-3">
                <input onChange={this.handleChange} value={this.state.first_name} placeholder="First Name" type="text" id="first_name" className="form-control" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChange} value={this.state.last_name} placeholder="Last Name" type="text" id="last_name" className="form-control" />
                <label htmlFor="first_name">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChange} value={this.state.address} placeholder="Address" type="text" id="address" className="form-control" />
                <label htmlFor="first_name">Address</label>
              </div>
              <button className="btn btn-primary">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;



// from https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/

// import { useState } from 'react';

// export default function Form() {

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (
// 	<div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">Name</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

// 		<button onClick={handleSubmit} className="btn" type="submit">
// 		Submit
// 		</button>
// 	</form>
// 	</div>
// );
// }
