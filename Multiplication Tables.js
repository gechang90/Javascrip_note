
// create a nest loop 

function multiplicationTable(row, col) {
    //your code here
    let output = [];
    for (i = 0; i < row; i++) {
        let output1 = [];
        for (j = 0; j < col; j++) {

            output1.push((i + 1) * (j + 1));
        }
        output.push(output1);

    }

    return output;
}