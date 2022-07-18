import { signInWithGoogle } from "../../services/firebase";

import { ReactComponent as GoogleIcon } from "../../styles/icons/google.svg";

import s from "./Login.module.scss";

const Login = () => {
  return (
    <button className={s.button} onClick={signInWithGoogle}>
      <GoogleIcon />
    </button>
  );
};

export default Login;
