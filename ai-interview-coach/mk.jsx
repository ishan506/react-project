 import { FiLogOut, FiPhoneCall, FiUser } from "react-icons/fi";

function ProfileMenu() {
  return (
    <div className="menu">
      <button><FiUser /> View Profile</button>
      <button><FiPhoneCall /> Contact Support</button>
      <button><FiLogOut /> Log Out</button>
    </div>
  );
}
export default ProfileMenu