import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useLazyLoginAdminQuery } from "../../features/adminSlice";

const Auth = () => {
  const navigate = useNavigate()
  const [adminLogin] = useLazyLoginAdminQuery();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    adminLogin({ email, password }, true).then((response) => {
      const { token } = response.data;
      const { user } = response.data;
      localStorage.setItem("adminToken", token);
      console.log(localStorage.getItem("token"));
      console.log(user);
      console.log(token);
      navigate("/");
    });
  };
  return (
    <Form>
      <FormGroup>
        <Input
          type="email"
          name={email}
          value={email}
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          name={password}
          value={password}
          placeholder="Enter Pass"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={handleLogin}>Login</Button>
      </FormGroup>
    </Form>
  );
};

export default Auth;
