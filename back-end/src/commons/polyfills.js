Number.isNumber = function (number) {
    return typeof number !== 'boolean' && !isNaN(number)
}

Number.validate = function (number) {
    if (!this.isNumber(number)) throw new TypeError(`${number} is not a number`)
}