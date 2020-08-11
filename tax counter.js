
// calculate interest and tax

function calculateYears(p, i, t, d) {
    // output = p*(1+i)-(p*i-(1-t))
    function calOneYear(p, i, t) {
        return p * (1 + i) - (p*i*t);
    }
    var output = p;
    var countYear = 0;
    while (output < d) {
        output = calOneYear(output, i, t);
        countYear++;
    }
return countYear
}

// console.log(calculateYears(1000, 0.05, 0.18, 1100))






