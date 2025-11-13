import React from "react";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const { authUser, isLoading, login } = useAuthStore();
  return <div>Login</div>;
};

export default Login;
