import { Link } from 'react-router-dom';
import styles from './Register.module.css'
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

const registerFormKeys = {
  Email: 'email',
  Password: 'password',
  RePassword: 're-password',
}

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
    [registerFormKeys.Email]: '',
    [registerFormKeys.Password]: '',
    [registerFormKeys.RePassword]: '',
  });

    return (
        <section className="register">
    <div className={styles.form}>
      <h2>Register</h2>
      <form className={styles["register-form"]} onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
          onChange={onChange}
          value={values[registerFormKeys.Email]}
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
          onChange={onChange}
          value={values[registerFormKeys.Password]}
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
          onChange={onChange}
          value={values[registerFormKeys.RePassword]}
        />
        <button type="submit">register</button>
        <p className={styles.message}>Already registered? <Link to="/login">Login</Link></p>
      </form>
    </div>
  </section>
    );
}