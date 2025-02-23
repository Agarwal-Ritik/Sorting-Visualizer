
export function generateArray(arraysize) {
  let array = [];
  for (let i = 0; i < arraysize; i++) {
    array.push(Math.floor(Math.random() * arraysize) + 1);
  }
  return array;
}
