import faker from "faker";
import { createProduct } from "../src/services/products.js";
import  '../src/config/mongo.js'
import { Product } from "../src/models/products.js";


const getFakeProduct = () => ({
  name: faker.commerce.productName(),
  description: faker.lorem.paragraph(),
  price: faker.commerce.price(),
  images: [faker.image.fashion(300,300) + `?random=${Math.random()}`],
});

const products = Array(20).fill(null).map(getFakeProduct);


(async () => {
  await Product.deleteMany({})

  for(let product of products){
    console.log(product);
    const result = await createProduct(product)
    console.log(result)
  }
})()


setTimeout(()=>console.log('done'),2000)


// nodemon -r dotenv/config tasks/generate-products.js