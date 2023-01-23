import { signInWithGoogle } from "../../../services/firebase";

import { Button } from "./Login.styled";
import { FaRegUser } from "react-icons/fa";

export default function Login() {
  return (
    <Button onClick={signInWithGoogle}>
      <FaRegUser size={22} />
    </Button>
  );
}
