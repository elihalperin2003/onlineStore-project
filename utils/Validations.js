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

export function isCartFull(res, cart) {
  if (cart.length === 0) {
    res.status(400).json({ success: false, message: "The cart is empty" });
    return false;
  }
  return true;
}

export function isPaymentPossible(res, balance, total) {
  if (balance - total < 0) {
    res.status(400).json({
      success: false,
      message: "You do not have enough money in your account",
    });
    return false;
  }
  return true;
}

export function isInStock(res, products, items) {
  for (const item of items) {
    const inStock = products.find(
      (product) => +product.id === +item.productId,
    ).stock;
    if (+inStock - +item.quantuty < 0) {
      res.status(400).json({
        success: false,
        message: "Out of stock",
      });
      return false;
    }
  }
  return true;
}
