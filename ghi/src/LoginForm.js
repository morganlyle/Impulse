import React, { useState } from "react";

// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         event.preventDefault();
//         const target = event.target;
//         this.setState({
//             [target.name]: target.value,
//         });
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         username.login({
//             method: "password",
//             username: this.state.username,
//             password: this.state.password,
//         });
//     }

export default function LoginForm() {

    // const [token, setToken] = useState();

    // render() {
    return (
        <div style={{ paddingBottom: '150px' }} className="row">
            <div className="offset-3 col-6">
                <div className="b_cards shad_intense p-4 rounded mt-4 heliotrope_gray">
                    <h1 className="nameText pb-3">Log in!</h1>
                    <form onSubmit={this.handleSubmit} id="create-Login-form">
                        <div className="inputText form-floating mb-3">
                            <input onChange={this.handleChange} value={this.state.username} placeholder="Username" type="text" id="username" className="siteText form-control" />
                            <label htmlFor="name">Username</label>
                        </div>
                        <div className="inputText form-floating mb-3">
                            <input onChange={this.handleChange} value={this.state.password} placeholder="Password" type="password" id="password" className="siteText form-control" />
                            <label htmlFor="name">Password</label>
                        </div>
                        <button className="btn btn-light siteText almond ob_button">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
// };




