import { useNavigate } from "react-router-dom";
import { Button } from "./BackLink.styled";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() => navigate(-1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g
          stroke="#bf000a"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <circle cx="16" cy="16" r="15.12" fill="none"></circle>
          <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
        </g>
      </svg>
    </Button>
  );
}
