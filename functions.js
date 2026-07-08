import { readFile, writeFile } from "./io.js";

export async function getProducts() {
  const products = readFile("./database/products.json");
  return products;
}
