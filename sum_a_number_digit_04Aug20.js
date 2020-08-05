function sumDigits(number) {

  var absnum = Math.abs(number).toString();
  var arrnum = absnum.split("");
  var arr1 = arrnum.map(element => Number(element)
  );
  var output = 0;
  arr1.forEach(element => output += element);
  return Number(output);
}

// console.log(sumDigits(10)); 