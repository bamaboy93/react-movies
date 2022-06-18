import s from "./ErrorWrapper.module.scss";
import PropTypes from "prop-types";

export default function ErrorWrapper({ query }) {
  return (
    <div>
      <h2 className={s.title}>Oops!</h2>
      <p className={s.text}>There are no related movies for "{query}".</p>
    </div>
  );
}

ErrorWrapper.propTypes = {
  query: PropTypes.string.isRequired,
};
