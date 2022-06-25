import errorImage from "../../styles/images/YouTube.jpg";

export default function VideoError() {
  return (
    <div>
      <img
        src={errorImage}
        alt="nothing-found"
        style={{ height: 540, width: 960 }}
      ></img>
    </div>
  );
}
