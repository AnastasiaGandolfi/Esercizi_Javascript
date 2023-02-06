const isLogged = true;

function isLog(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged === true) {
            resolve(Math.random())
        } else {
            reject(new Error('There is an error!'))
        }
    })
}

function num(number) {
    return new Promise((resolve, reject) => {
        if ('Number' !== typeof(number)) {
            reject(new TypeError(`${number} is not a number`))
        }
        if (number > 0.5) {
            resolve({ name: "John", age: 24 })
        } else {
            reject(new Error('There is a big error!'))
        }
    })
}

isLog(isLogged)
    .then((val) => num('ciao'))
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
    .finally(() => console.log('This string will always be displayed'))

