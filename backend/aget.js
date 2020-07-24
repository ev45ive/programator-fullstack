import axios from "axios";

const getProducts = () => {
  axios
    .get("http://192.168.0.146:8880/api/products/")
    .then((res) => {
      const products = res.data;
      console.log(products);
       })
    .catch((error) => console.log(error));
};

getProducts();
