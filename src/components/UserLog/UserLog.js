import { Link } from 'react-router-dom';

import './UserLog.css';

import { login } from '../../utils/firebase';

const UserLog = ({
    history
}) => {
    const onLoginFormSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password, history);
    };

    return (
        <div className="login-wrapper background-cover">
            <div className="form-container">
                <h2>Login<i className="fa fa-paw logo-paw"></i></h2>

                <form className="login-form form" onSubmit={onLoginFormSubmit}>
                    <fieldset className="form-email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" />
                    </fieldset>

                    <fieldset className="form-password">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" placeholder="Enter your password" />
                    </fieldset>

                    <div className="error-wrapper">
                        <div className="error-message"></div>
                    </div>

                    <button type="submit" className="form-btn">Login</button>

                    <Link to="/Healthy-Paw/register">Don't have an account?<br /> Create it from here.</Link>
                </form>
            </div>
        </div>
    );
};

export default UserLog;
