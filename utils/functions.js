import { readFile, writeFile } from "./io.js";

export async function getProducts() {
  const products = await readFile("./database/products.json");
  return products;
}

export async function getCart(customerId) {
  const customers = await readFile("./database/customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  return customer.cart;
}
