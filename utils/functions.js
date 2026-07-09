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

export async function addProduct(body) {
  const { customerId, productId, quantuty } = body;
  const customers = await readFile("./database/customers.json");
  const products = await readFile("./database/products.json");
  let customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  let product = products.find((product) => product.id === productId);
  product.stock -= +quantuty;
  // customer.cart.push({ productId, quantuty });
  await writeFile("./database/customers.json", customers);
  await writeFile("./database/products.json", products);
  return;
}

export async function deleteProduct(productId, customerId) {
  const customers = await readFile("./database/customers.json");
  const products = await readFile("./database/products.json");
  let customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  let product = products.find((product) => product.id === productId);
  product.stock += 1;
  await writeFile("./database/customers.json", customers);
  await writeFile("./database/products.json", products);
  return;
}

export async function getBalance(customerId) {
  const customers = await readFile("./database/customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  return customer.balance;
}

export async function getOrders() {
  const products = await readFile("./database/orders.json");
  return products;
}

export async function checkout(customerId) {
  const orders = await readFile("./database/orders.json");
  const customers = await readFile("./database/customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  const id = orders.length + 1;
  const createdAt = new Date().toISOString();

  const newOrder = { id, customerId, createdAt };
  orders.push(newOrder);
  await writeFile("./database/orders.json", orders);
}
