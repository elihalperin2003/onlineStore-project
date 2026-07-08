import fs from "fs/promises";

export async function readFile(path) {
  const data = await fs.readFile(path, "utf-8");
  return JSON.parse(data);
}

export async function writeFile(path, content) {
  const data = await fs.writeFile(path, (content, null, 2));
}
