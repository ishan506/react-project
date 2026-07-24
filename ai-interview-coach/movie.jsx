 import { useState } from "react";

function Apps() {
  const [find, setFind] = useState("");
  const [result, setResult] = useState([]);

  const movies = [
    "Avengers",
    "Batman",
    "Iron Man",
    "Spider-Man",
    "Jawan",
    "Pathaan",
    "KGF",
    "Pushpa",
  ];

  function click() {
    const fi = movies.filter((movie) =>
      movie.toLowerCase().includes(find.toLowerCase())
    );

    setResult(fi);
  }

  return (
    <>
      <input
        type="text"
        value={find}
        onChange={(e) => setFind(e.target.value)}
      />

      <button onClick={click}>Search</button>

      <ul>
        {(result.length === 0 && find === "" ? movies : result).map(
          (movie, index) => (
            <li key={index}>{movie}</li>
          )
        )}
      </ul>
    </>
  );
}

export default Apps;