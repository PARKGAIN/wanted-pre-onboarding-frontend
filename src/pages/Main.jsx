import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to="/signup">
        <button>회원가입하러가기</button>
      </Link>
      <Link to="/signin">
        <button>로그인하러가기</button>
      </Link>
    </div>
  );
};

export default Main;
