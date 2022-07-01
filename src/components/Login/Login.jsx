import { signInWithGoogle } from "../../services/firebase";

import { ReactComponent as GoogleIcon } from "../../styles/icons/google_icon.svg";

import s from "./Login.module.scss";

const Login = () => {
  return (
    <button className={s.button} onClick={signInWithGoogle}>
      <span className={s.buttonText}>Login</span>
      <GoogleIcon />
    </button>
  );
};

export default Login;
