import faker from "faker";
import { createWishlist } from "../src/services/wishlist.js";
import  '../src/config/mongo.js'
import { WishList } from "../src/models/wishlist.js";


const getFakeProduct = () => ({
  name: faker.commerce.productName(),
  description: faker.lorem.paragraph(),
  price: faker.commerce.price(),
  images: [faker.image.fashion(300,300) + `?random=${Math.random()}`],
});

const products = Array(20).fill(null).map(getFakeProduct); //?


(async () => {
  await WishList.deleteMany({}) //?

  for(let product of products){
    console.log(product);
    const result = await createWishlist(product)
    console.log(result)
  }
})()


setTimeout(()=>console.log('done'),2000)


// nodemon -r dotenv/config tasks/generate-products.js