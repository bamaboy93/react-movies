import PropTypes from "prop-types";
import { Alert } from "@mui/material";
import Container from "../Container";
import { AlertWrapper } from "./AlertMessage.styled";

export default function AlertMessage({ message }) {
  return (
    <Container>
      <AlertWrapper>
        <Alert variant="filled" severity="info" color="error">
          <b>{message}</b>
        </Alert>
      </AlertWrapper>
    </Container>
  );
}

AlertMessage.propTypes = {
  message: PropTypes.string,
};
