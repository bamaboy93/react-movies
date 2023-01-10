import { signInWithGoogle } from "../../services/firebase";

import s from "./Login.module.scss";
import { FaRegUser } from "react-icons/fa";

const Login = () => {
  return (
    <button className={s.button} onClick={signInWithGoogle}>
      <FaRegUser />
    </button>
  );
};

export default Login;
