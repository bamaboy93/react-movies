import { signInWithGoogle } from "../../services/firebase";

import { Button } from "./Login.styled";
import { BsGoogle } from "react-icons/bs";

export default function Login() {
  return (
    <Button onClick={signInWithGoogle}>
      <BsGoogle size={22} />
    </Button>
  );
}
