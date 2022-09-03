import React from "react";
import { authService } from "../APIs/Services/Auth";

function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginOnSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      authService
        .login(user)
        .then(({ data }) =>
          localStorage.setItem("userData", data.access_token)
        );
    },
    [user]
  );
  return (
    <form onSubmit={handleLoginOnSubmit}>
      <input name="username" onChange={handleLoginChange} />
      <input name="password" type="password" onChange={handleLoginChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
