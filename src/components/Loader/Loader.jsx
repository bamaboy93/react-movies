import { Puff } from "react-loader-spinner";

import { LoaderWrapper, MainWrapper } from "./Loader.styled";

function Spinner() {
  return (
    <MainWrapper>
      <LoaderWrapper>
        <Puff color="red" height={100} width={100} />
      </LoaderWrapper>
    </MainWrapper>
  );
}

export default Spinner;
