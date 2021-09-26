const buildError = function(name: string) {
    return class extends Error {
        constructor(message: string) {
            super(message)
        }

        get name() { return name }
    }
}

export const NonExistenceError = buildError('NonExistenceError')
