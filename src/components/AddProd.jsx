import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "reactstrap";
import { useAddProductMutation } from "../features/productSlice";


const AddProd = () => {
  const [image, setImage] = useState(null);
  const [addProduct] = useAddProductMutation();
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const {
      //   name : {value :id}________for referance
      title: { value: title },
      image: { value: image },
      price: { value: price },
      discount: { value: discount },
      proCode: { value: proCode },
      category: { value: category },
      subCategory: { value: subCategory },
      description: { value: description },
    } = e.target.elements;
    addProduct({
      title: title,
      image: image,
      price: price,
      discount: discount,
      proCode: proCode,
      category: category,
      subCategory: subCategory,
      description: description,
    });
    alert("product added, please refresh page");
    navigate("/");
  };
  return (
    <div className="container main ">
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Dashboard
      </Button>
      <Form
        className="container d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
        onSubmit={handleLogin}
      >
        <Input type="text" name="title" id="title" placeholder="title" />
        <Input
          type="file"
          name="image"
          id="image"
          placeholder="image"
          onChange={handleFileChange}
        />
        <Input type="number" name="price" id="price" placeholder="price" />
        <Input
          type="number"
          name="discount"
          id="discount"
          placeholder="discount"
        />
        <Input
          type="number"
          name="proCode"
          id="proCode"
          placeholder="proCode"
        />
        <Input
          type="text"
          name="category"
          id="category"
          placeholder="category"
        />
        <Input
          type="text"
          name="subCategory"
          id="subCategory"
          placeholder="subCategory"
        />
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="description"
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default AddProd;
