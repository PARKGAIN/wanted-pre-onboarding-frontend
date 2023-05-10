import Header from "components/Header";
import TODOList from "components/TODOList";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "context/token";

const TODO = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!ACCESS_TOKEN) {
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
