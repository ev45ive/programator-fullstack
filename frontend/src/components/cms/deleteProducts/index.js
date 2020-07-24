import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteProducts = () => {
  const button_press = () => {
    const confirm = window.confirm(
      "Are you sure to delete all products database ?"
    );
    if (confirm) {
      // window.alert("Confirm delete: ", delete_products());
      delete_products();
    } else {
      // window.alert("Don't Delete!");
    }
  };
  const ConfirmBox_open = () => {
    document.querySelector("#root > div > div.confirm-box").style =
      "display:flex;";
  };
  const ConfirmBox_close = () => {
    document.querySelector("#root > div > div.confirm-box").style =
      "display:none;";
  };
  const button_press_2 = () => {
    ConfirmBox_open();
    axios
      .get("http://85.222.120.170:15118/api/products/")
      .then((res) => {
        const products = res.data;
        console.log(products);
        setProductsList(products);
        console.log(products.product._id);
      })
      .catch((error) => console.log(error));
  };
  const cancel = () => {
    ConfirmBox_close();
  };
  const confirm_delete = () => {
    delete_products();
    ConfirmBox_close();
  };

  const delete_products = () => {
    axios.get("http://192.168.0.146:8880/api/products/delete").then((res) => {
      const delete_confirmation = res.data;
      console.log(delete_confirmation);
    });
  };

  const [productsArray, setProductsList] = useState([]);
  

  return (
    <>
      <button onClick={button_press_2} value="">
        delete products
      </button>
      <div className="confirm-box">
        <button onClick={confirm_delete}>CONFIRM</button>
        <button onClick={cancel}>CANCEL</button>
        <div>Products in base: {productsArray.length}</div>
        <div>Are You sure to delete all products?</div>
      </div>
    </>
  );
};

export default DeleteProducts;
