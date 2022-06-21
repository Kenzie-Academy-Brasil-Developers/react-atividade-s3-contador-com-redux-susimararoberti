import { useSelector } from "react-redux";
import "./style.css";

function Display() {
  const counter = useSelector(({ counter }) => counter);

  return (
    <div className="number">
      <p>{counter}</p>
    </div>
  );
}

export default Display;
