import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import Container from "../Container";

export default function Loader() {
  return (
    <Container>
      <TailSpin
        ariaLabel="loading-indicator"
        width="100"
        strokeColor="#9896f1"
      />
    </Container>
  );
}
