import errorImage from "../../icons/notFound.jpg";

export default function VideoError() {
  return (
    <div>
      <img
        src={errorImage}
        width="250"
        alt="nothing-found"
        style={{ marginTop: 50, width: 400 }}
      ></img>
    </div>
  );
}
