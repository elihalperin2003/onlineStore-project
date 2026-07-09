export function isTrue(res, input) {
  if (input && input !== "true") {
    res
      .status(400)
      .json({ success: false, message: "you must enter true for 'inStock" });
    return false;
  }
  return true;
}

export function isNumber(res, num) {
  if (
    num === undefined ||
    num === null ||
    num === "" ||
    typeof num !== "number" ||
    isNaN(num)
  ) {
    res.status(400).json({ success: false, message: "you must enter number" });
    return false;
  }
  return true;
}

export function isfound(res, input) {
  if (!input) {
    res.status(404).json({ success: false, message: "id not found" });
    return false;
  }
  return true;
}

export function isExists(res, input) {
  if (input !== 0 && !input) {
    res
      .status(400)
      .json({ success: false, message: "you must enter all inputs" });
    return false;
  }
  return true;
}

export function isPositiveNumber(res, num) {
  if (!isNumber(res, num)) return false;
  if (num <= 0) {
    res
      .status(400)
      .json({ success: false, message: "you must enter positive number" });
    return false;
  }
  return true;
}

export function isStuckFull(res, stuck) {
  if (+stuck === 0) {
    res
      .status(400)
      .json({ success: false, message: "The product is out of stock" });
    return false;
  }
  return true;
}
