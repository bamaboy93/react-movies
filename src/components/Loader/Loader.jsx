import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from "react-loader-spinner";
import Container from "../Container";

export default function Loader() {
  return (
    <Container>
      <MutatingDots
        height="300"
        width="300"
        color="#e50914"
        secondaryColor="#e50914"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
}
