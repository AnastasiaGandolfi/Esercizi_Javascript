function printName() {
    let helloName = '"Hello John"';

    function inner() {
        setTimeout(() => {
            console.log(helloName);
        }, 500)
    }
    return inner;
}

printName()();