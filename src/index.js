module.exports = function towelSort(matrix) {
  if (typeof (matrix) !== 'undefined') {
    let arr = [];
    matrix.map((value, index) =>
      index % 2 == 0 ? arr.push(value) : arr.push(value.reverse()));
    return [].concat(...arr)
  }
  return [];
} 