import { inMemoryPersistence, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Dev 03 - Mr.T ❤️</span>
      <div className="users">
        <img src={currentUser.photoURL} alt=" " />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Đăng xuất</button>
      </div>
    </div>
  );
};

export default Navbar;