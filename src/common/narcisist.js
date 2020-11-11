function narcisistNumber(n) {
    let output = [];
    let finishing = 0;

    for (var i = 0, len = n.length; i < len; i += 1) {
        output.push(+n.charAt(i));
    }

    output.forEach((number, i) => {
        output[i] = Math.pow(number, n.length)
        finishing = finishing += output[i];
    });

    if(n === finishing.toString()) {
        return true;
    } 
    return false;
}

module.exports = narcisistNumber;