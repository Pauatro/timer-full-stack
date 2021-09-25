const buildError = function(name) {
    return class extends Error {
        constructor(message, fileName, lineNumber) {
            super(message, fileName, lineNumber)
        }

        get name() { return name }
    }
}

module.exports = {
    DuplicityError: buildError('DuplicityError'),
    VoidError: buildError('VoidError'),
    NonExistenceError: buildError('NonExistenceError'),
    CredentialsError: buildError('CredentialsError'),
    ValueError: buildError('ValueError')
}