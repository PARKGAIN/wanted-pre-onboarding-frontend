import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SignupPage = lazy(() => import("pages/SignUp"));
const SignInPage = lazy(() => import("pages/SignIn"));
const TODOPage = lazy(() => import("pages/TODO"));
const WelcomePage = lazy(() => import("pages/Welcome"));
const NotFound = lazy(() => import("pages/NotFound"));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/todo" element={<TODOPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
