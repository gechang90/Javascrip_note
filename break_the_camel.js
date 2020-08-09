function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");

}



function arrayDiff(a, b) {
    function reduced(arr1, bEl) {
        return arr1.filter(el => el != bEl);
    }
    b.forEach(num => {
        a = reduced(a, num);
    });
    return a;
}

// console.log(arrayDiff([1, 2, 3], [3,2]));