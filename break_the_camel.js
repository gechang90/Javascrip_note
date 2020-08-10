
// //replace functions
function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");

// }

// // filter funtions

function arrayDiff(a, b) {
    function reduced(arr1, bEl) {
        return arr1.filter(el => el != bEl);
    }
    b.forEach(num => {
        a = reduced(a, num);
    });
    return a;
}

// // console.log(arrayDiff([1, 2, 3], [3,2]));

function capitals(word) {

    const output = [];
    arrword = word.split("");

    arrword.forEach((letter, index) => {
        if (letter.match(/[A-Z]/)) {
            output.push(index);
        }
    });
    return output;
};

// // console.log(capitals('CodEWaRs'));


// regular expressions
function friend(friends) {
    //your code here
    console.log(friends);

    const friendlist = friends.filter(name => name.length == 4 && name.match(/[a-z]/gi));
    return friendlist;

}

console.log(friend(["Ryan", "Kieran", "Jason", "1234"]));


// && (/[a-z]/gi).includes(name.split()))