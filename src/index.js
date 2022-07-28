// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix == null) {
        return arr;
    } else {
        for (let item = 0; item < matrix.length; item++) {
            if (item % 2) {
                matrix[item].reverse();
                arr = arr.concat(matrix[item]);
            } else {
                arr = arr.concat(matrix[item]);
            }
        }
        return arr;
    }
};
