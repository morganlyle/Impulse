import React, {useState} from 'react';
import {useAuthContext, useToken} from './auth';

export default function SignUpForm() {
  const [,,signup] = useToken();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  const { token } = useAuthContext();

  const handleSubmit = async e => {
      e.preventDefault();
      await signup(username, password, email, firstName, lastName);
      console.log("here's the token:", token);
  };

  return (
<div style={{ paddingBottom: '150px'}} className="row">
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
                <input onChange={e => setFirstName(e.target.value)} placeholder="Firstame" type="text" id="firstName" value={firstName} className="siteText form-control" />
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


// class SignUpForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//       password_verify: '',
//       first_name: '',
//       last_name: '',
//       address: '',
//     }

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value })
//   }

//   // do I need a componentDidMount function? Not yet sure what that component would be here.

//   async handleSubmit(event) {
//     if (this.state['password'] === this.state['password_verify']) {
//       event.preventDefault();
//       delete this.state['password_verify']  // maybe better way to do this? warning is displayed in console about changing controlled input to be uncontrolled
//       const data = { ...this.state };

//       const signUpUrl = 'http://localhost:8200/api/users/';
//       const fetchConfig = {
//         method: "post",
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };

//       const response = await fetch(signUpUrl, fetchConfig);
//       if (response.ok) {
//         const newSignUp = await response.json();
//         console.log(newSignUp);
//         this.setState({
//           username: '',
//           email: '',
//           password: '',
//           first_name: '',
//           last_name: '',
//           address: '',
//         });
//       }
//     } else {
//       console.log('Sign up failed');  // maybe have a pop up to make sure password match? can't get this console.log to show up on fail
//     }

//   }

//   render() {
//     return (
//       <div style={{ paddingBottom: '150px'}} className="row">
//         <div className="offset-3 col-6">
//           <div className="b_cards shad_intense p-4 rounded mt-4 heliotrope_gray">
//             <h1 className="nameText pb-3">Sign up for your subscription box!</h1>
//             <form onSubmit={this.handleSubmit} id="create-signup-form">
//               <div className="inputText form-floating mb-3">
//                 <input onChange={this.handleChange} value={this.state.username} placeholder="Username" type="text" id="username" className="siteText form-control" />
//                 <label htmlFor="name">Username</label>
//               </div>
//               <div className="inputText form-floating mb-3">
//                 <input onChange={this.handleChange} value={this.state.email} placeholder="Email address" type="text" id="email" className="siteText form-control" />
//                 <label htmlFor="name">Email address</label>
//               </div>
//               <div className="inputText form-floating mb-3">
//                 <input onChange={this.handleChange} value={this.state.password} placeholder="Password" type="password" id="password" className="siteText form-control" />
//                 <label htmlFor="name">Password</label>
//               </div>
//               <div className="inputText form-floating mb-3">
//                 <input onChange={this.handleChange} value={this.state.password_verify} placeholder="Enter password again" type="password" id="password_verify" className="siteText form-control" />
//                 <label htmlFor="name">Enter password again</label>
//               </div>
//               <div className="inputText form-floating mb-3">
//                 <input onChange={this.handleChange} value={this.state.first_name} placeholder="First Name" type="text" id="first_name" className="siteText form-control" />
//                 <label htmlFor="first_name">First Name</label>
//               </div>
//               <div className="inputText form-floating mb-3">
//                 <input onChange={this.handleChange} value={this.state.last_name} placeholder="Last Name" type="text" id="last_name" className="siteText form-control" />
//                 <label htmlFor="first_name">Last Name</label>
//               </div>
//               <div className="inputText form-floating mb-3">
//                 <input onChange={this.handleChange} value={this.state.address} placeholder="Address" type="text" id="address" className="siteText form-control" />
//                 <label htmlFor="first_name">Address</label>
//               </div>
//               <button className="btn btn-light siteText almond ob_button">Sign up</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
// };

// export default SignUpForm;




