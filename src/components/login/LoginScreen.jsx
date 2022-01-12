import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  // const { user, dispatch } = context; descomentar cuando se use una variable user
  const { dispatch } = context; //comentar cuando se use una variable user
  const lastPath = localStorage.getItem("lastPath") || "/marvel";
  console.log(lastPath);
  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "test" },
    };

    dispatch(action);

    console.log(lastPath);

    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
