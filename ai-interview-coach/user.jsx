import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { p } from "./src/imp";
import { useContext } from "react";
function Userpage() {
  const [update, setUpdate] = useState("");
  const [change, setChange] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("key")) || [];
    setChange(data);
  }, []);
  function remove(index) {
    const p = change.filter((user, i) => i != index);
    setChange(p);
    localStorage.setItem("key", JSON.stringify(p));
    // function removeAll() {
    //   setChange([]);
    //   localStorage.removeItem("key");
  }
  function up(index) {
    const p = prompt("pp");
    const pi = change.map((user, i) => (i == index ? p : user));
    setChange(pi);
    localStorage.setItem("key", JSON.stringify(pi));
  }
  const { name, setName } = useContext(p);
  return (
    <>
      <table border="1">
        <th>{name}</th>
        {change.map((users, index) => {
          return (
            <tr key={index}>
              <td>
                {users}{" "}
                <button
                  onClick={() => {
                    remove(index);
                  }}
                >
                  DELTE
                </button>
                <button
                  onClick={() => {
                    up(index);
                  }}
                >
                  DEE
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <Link to="/">home</Link>
    </>
  );
}

export default Userpage;
