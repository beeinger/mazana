function indexesOf(value, array) {
  var a = [],
    i = -1;
  while ((i = array.indexOf(value, i + 1)) >= 0) a.push(i);
  return a;
}
function keysOf(value, dict) {
  const values = Object.values(dict);
  const indexes = indexesOf(value, values);
  const keys = Object.keys(dict);

  return indexes.map((val) => keys[val]);
}

export { indexesOf, keysOf };
