import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWapper">
        <span className="logo">Dev 03 - Mr.T ❤️</span>
        <span className="title">Đăng nhập</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />

          <button>Đăng nhập</button>
          {err && <span>Đã sảy ra sự cố</span>}
        </form>
        <p>
          Bạn chưa có tài khoản? <Link to="/register">Đăng kí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
