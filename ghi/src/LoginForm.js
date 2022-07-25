import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    async handleSubmit(event) {
        if (this.state['password'] === this.state['password_verify']) {
            event.preventDefault();
            delete this.state['password_verify']
            const data = { ...this.state };

            const LoginUrl = 'http://localhost:8200/api/users/';
            const fetchConfig = {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const response = await fetch(LoginUrl, fetchConfig);
            if (response.ok) {
                const newLogin = await response.json();
                console.log(newLogin);
                this.setState({
                    username: '',
                    password: '',
                });
            }
        }

    }

    render() {
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
};

export default LoginForm;
