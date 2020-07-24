const axios = require ('axios');

axios
.get("http://192.168.0.146:8880/api/products/")
.then((res) => {
  const products = res.data;
  console.log(products);
//   setProductsList(products);
//   setIsLoading(false);
  console.log(products.length);
//   console.log(products[0,1,2,3,4,5,6,7]);
})
.catch((error) => console.log(error));

