import { Puff } from "react-loader-spinner";

import { LoaderContainer } from "./Loader.styled";

export default function Loader() {
  return (
    <LoaderContainer>
      <Puff color="red" height={100} width={100} />
    </LoaderContainer>
  );
}
