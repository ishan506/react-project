 import dummy from  "./img.png";
import React from "react"
const Header = () => {
  return (
    <>
      <img
        src={dummy}
        alt="online"
        data-testid="online-status"
      />
    </>
  );
};

export default Header;