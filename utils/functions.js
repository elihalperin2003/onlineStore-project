import { readFile, writeFile } from "./io.js";
import {
  isNumber,
  isTrue,
  isfound,
  isExists,
  isPositiveNumber,
  isStuckFull,
} from "./Validations.js";

export async function getProducts(res, params) {
  let products = await readFile("./database/products.json");
  const { inStock, maxPrice, search } = params;
  if (!isTrue(res, inStock)) return;
  if (!isNumber(res, maxPrice)) return;
  if (inStock) {
    products = products.filter((product) => +product.stock > 0);
  }
  if (maxPrice) {
    products = products.filter((product) => +product.price >= +maxPrice);
  }
  if (search) {
    products = products.filter((product) => product.name.includes(search));
  }

  return products;
}

export async function getCart(res, customerId) {
  if (!isExists(res, customerId)) return;
  if (!isNumber(res, customerId)) return;
  const customers = await readFile("./database/customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  if (!isfound(res, customer)) return;
  return customer.cart;
}

export async function addProduct(res, body) {
  const { customerId, productId, quantuty } = body;
  if (!isExists(res, customerId)) return;
  if (!isExists(res, productId)) return;
  if (!isExists(res, quantuty)) return;
  if (!isPositiveNumber(res, quantuty)) return;
  if (!isNumber(res, customerId)) return;
  if (!isNumber(res, productId)) return;
  if (!isNumber(res, quantuty)) return;
  const customers = await readFile("./database/customers.json");
  const products = await readFile("./database/products.json");
  let customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  let product = products.find((product) => product.id === productId);
  if (!isfound(res, customer)) return;
  if (!isfound(res, product)) return;
  if (!isExists(res, product)) return;
  if (!isStuckFull(res, product.stock)) return;
  customer.cart.push({ productId, quantuty });
  await writeFile("./database/customers.json", customers);
  await writeFile("./database/products.json", products);
  return "product added";
}

export async function deleteProduct(res, productId, customerId) {
  if (!isExists(res, customerId)) return;
  if (!isExists(res, productId)) return;
  if (!isNumber(res, +customerId)) return;
  if (!isNumber(res, +productId)) return;
  const customers = await readFile("./database/customers.json");
  const products = await readFile("./database/products.json");
  let customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  let productFordeleting = customer.cart.find(
    (product) => +productId === +productId,
  );
  if (!isfound(res, customer)) return;
  if (!isfound(res, productFordeleting)) return;
  if (!isExists(res, productFordeleting)) return;
  customer.cart.pop(productFordeleting);
  // product.stock += 1;
  await writeFile("./database/customers.json", customers);
  await writeFile("./database/products.json", products);
  return "product deleted";
}

export async function getBalance(res, customerId) {
  if (!isNumber(res, customerId)) return;

  if (!isExists(res, customerId)) return;
  const customers = await readFile("./database/customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  if (!isfound(res, customer)) return;

  return customer.balance;
}

export async function getOrders(res, customerId) {
  if (!isExists(res, customerId)) return;
  if (!isNumber(res, customerId)) return;
  const orders = await readFile("./database/orders.json");
  const ordersOfCustomer = orders.filter(
    (order) => +order.customerId === +customerId,
  );
  return ordersOfCustomer;
}

export async function checkout(customerId) {
  const orders = await readFile("./database/orders.json");
  const customers = await readFile("./database/customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  const id = orders.length + 301;
  const createdAt = new Date().toISOString();

  const newOrder = { id, customerId, createdAt };
  orders.push(newOrder);
  await writeFile("./database/orders.json", orders);
}
