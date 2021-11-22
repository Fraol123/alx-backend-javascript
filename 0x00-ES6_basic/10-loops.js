export default function appendToEachArrayValue(array, appendString) {
  let ar = [];
  for (let val of array) {
    ar.push(appendString + val);
  }

  return ar;
}
