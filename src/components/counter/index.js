import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";
import "./style.css";

function Counter() {
  const dispatch = useDispatch();
  return (
    <div className="div--button">
      <button className="button2" onClick={() => dispatch(subNumber(1))}>
        Reduz - 1
      </button>
      <button className="button1" onClick={() => dispatch(addNumber(1))}>
        Adiciona + 1
      </button>
    </div>
  );
}

export default Counter;
