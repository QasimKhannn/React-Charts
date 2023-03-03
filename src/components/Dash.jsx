import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../features/productSlice";

const Dash = () => {
  // ___________________for get All cars__________________/////
  const { data } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  return token ? (
    <div>
      <h1>This is the dashboard</h1>
      <Button
        className="btn btn-dark"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </Button>
      <hr />
      <Button className="btn btn-success" onClick={()=>{navigate("/addProd")}}>Add Product</Button>
      <div className="row">
        {data?.prod.map((dat) => {
          return (
            <div className="col-3 border border-dark">
              <ul style={{ listStyle: "none" }}>
                <li>{dat._id}</li>
                <li>{dat.title}</li>
                <li>{dat.image}</li>
                <li>{dat.price}</li>
                <li>{dat.discount}</li>
                <li>{dat.proCode}</li>
                <li>{dat.category}</li>
                <li>{dat.subCategory}</li>
                <li>{dat.description}</li>
              </ul>
              <Button
                onClick={() => {
                  deleteProduct(dat._id);
                  alert("Deleted Success, refresh page");
                }}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      You Dont Have Access!!!
      <Button
        className="btn btn-dark"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Dash;
