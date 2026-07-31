 import { useRef } from 'react';

function   MenuSlider() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Accesses the native DOM node directly
    inputRef.current.focus(); 
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
export default MenuSlider