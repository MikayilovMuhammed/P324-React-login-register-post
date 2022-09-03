import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../APIs/Services/Auth";

function Register() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const { push } = useHistory();

  const handleRegisterOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegisterOnSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      authService.register(user).then(() => push("/login"));
    },
    [user, push]
  );

  return (
    <form onSubmit={handleRegisterOnSubmit}>
      <input
        name="username"
        placeholder="Write username"
        onChange={handleRegisterOnChange}
      />
      <input
        name="email"
        placeholder="Write email"
        type="email"
        onChange={handleRegisterOnChange}
      />
      <input
        name="first_name"
        placeholder="Write Firstname"
        onChange={handleRegisterOnChange}
      />
      <input
        name="last_name"
        placeholder="Write LastName"
        onChange={handleRegisterOnChange}
      />
      <input
        name="password"
        placeholder="Write Pass"
        type="password"
        onChange={handleRegisterOnChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
