export abstract class NumberValidations{
    static isNumber = function (number: number) {
        return typeof number !== 'boolean' && !isNaN(number)
    }
    
    static validate = function (number: number) {
        if (!NumberValidations.isNumber(number)) throw new TypeError(`${number} is not a number`)
    }
} 
