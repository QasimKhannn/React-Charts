import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Dash = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  return token ? (
    <div>
      <h1>This is the dashboard</h1>
      <Button
        className="btn btn-dark"
        onClick={() => {
          localStorage.clear();
          navigate("/login")
        }}
      >
        Logout
      </Button>
    </div>
  ) : (
    <div>
      You Dont Have Access!!!
      <Button className="btn btn-dark" onClick={()=>{navigate("/login");}}>
        Login
      </Button>
    </div>
  );
};

export default Dash;
