'use strict';

module.exports = greet = (name) => {
    if (typeof name === 'string') {
        return `hello ${name}`;
    } else return null;
}