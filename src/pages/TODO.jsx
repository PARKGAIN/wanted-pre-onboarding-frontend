import Header from "components/Header";
import TODOList from "components/TODOList";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TODO = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Header />
      <TODOList />
    </>
  );
};

export default TODO;
