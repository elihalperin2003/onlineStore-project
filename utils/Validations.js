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
  if (!num) return true;
  if (num === undefined || num === null || num === "" || isNaN(Number(num))) {
    res.status(400).json({ success: false, message: "you must enter number" });
    return false;
  }
  return true;
}
