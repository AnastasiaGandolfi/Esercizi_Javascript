const number = 15;

function func() {
    return new Promise((resolve, reject) => {
        if (number > 10 ) {
            resolve('Il numero è maggiore di 10')
        } else {
            reject('Il numero è minore di 10')
        }
    })
}

func()
    .then(val => console.log(val))
    .catch(err => console.log(err))
