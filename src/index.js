module.exports = function towelSort (matrix) {
  if (!matrix == []) {
    let arr = [];
    for (item of matrix) {
     console.log(item);
     if (matrix.indexOf(item) == 1 || matrix.indexOf(item) == 3 ) {item.reverse()};
     for (elem of item) {
       arr.push(elem);
    }
    }
     return arr;
    } else {return []}
  
}
