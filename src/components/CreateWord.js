import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");

  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          navigate(`/day/${dayRef.current.value}`);
        }
      });
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label htmlFor="">Eng</label>
        <input type="text" placeholder="" ref={engRef} />
      </div>
      <div className="input_area">
        <label htmlFor="">Kor</label>
        <input type="text" placeholder="" ref={korRef} />
      </div>
      <div className="input_area">
        <label htmlFor="">Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>{isLoading ? "Saving..." : "저장"}</button>
    </form>
  );
}
