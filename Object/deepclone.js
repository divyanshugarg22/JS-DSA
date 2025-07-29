function deepclone(obj) {
  if (obj == null || typeof obj != "object") {
    return obj;
  }
  const copy = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    copy[key] = deepclone(obj[key]);
  }
  return copy;
}
