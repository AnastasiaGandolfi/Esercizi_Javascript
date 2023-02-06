const isLogged = true;

function isLog(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged === true) {
            resolve(Math.random())
        } else {
            reject(new Error('It\'s false'))
        }
    })
}

function num(number) {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({ name: "John", age: 24 })
        } else {
            reject(new Error('Error'))
        }
    })
}

isLog(isLogged)
    .then((val) => num(val))
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
