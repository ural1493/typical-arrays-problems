
exports.min = function min (array) {
    if (Array.isArray(array) && array.length) {
        return array.sort((a,b)=>a-b)[0];
    }
    else return 0;
}

exports.max = function max (array) {
    if (Array.isArray(array) && array.length) {
        return array.sort((a,b)=>b-a)[0];
    }
    else return 0;
}

exports.avg = function avg (array) {
    if (Array.isArray(array) && array.length) {
        return array.reduce((calc, value, index) => (calc+value))/array.length;
    }
    else return 0;
}
