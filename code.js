var matrixExample = [
    [ 1, 2, 3, 4 ],
    [ 4, 5, 6, 5 ],
    [ 7, 8, 9, 7 ],
    [ 7, 8, 9, 7 ]
];

function sumUpDiagonals(matrix) {
    if (matrix.length != matrix[0].length){
        return false;
    }
    sum=0; sum1=0;
    for (i=0; i<matrix.length; i++){
        sum+=matrix[i][i];
        sum1+=matrix[i][matrix.length-i-1];
    }
    return [sum, sum1];
}

console.log(sumUpDiagonals(matrixExample))