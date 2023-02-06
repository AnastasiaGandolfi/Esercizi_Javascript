function printAsyncName(callback, name) {
    setTimeout(callback, 1000)
    setTimeout(() => console.log(name), 2000)
}

function hello() {
    console.log('hello');
}

printAsyncName(hello, 'anastasia')
