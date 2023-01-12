import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../helpers/apiHelper";

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState();

    async function handleSubmit(event) {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        if (!username || !password) {
            setErrorMessage('Both username and password are required.');
            return;
        }

        const result = await login(username, password);

        if (result.token) {
            localStorage.setItem('userToken', result.token);
            setIsLoggedIn(true);
            navigate('/');
        }
        else {
            setErrorMessage(result.error);
        }
    }

    return (
        <div className="info">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button>Log In</button>
            </form>
            <span>{errorMessage}</span>
        </div>
    );
}

export default Login;