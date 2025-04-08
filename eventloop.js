const fs = require("fs");
const fsPromises = require("fs").promises;

function readFileWithCallback() {
    fs.readFile("simple.txt", 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

function readFileWithPromise() {
    fsPromises.readFile("promise.txt", 'utf-8')
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

async function readFileWithAsyncAwait() {
    try {
        const data = await fsPromises.readFile("async.txt", 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

function eventLoopDemo() {
    console.log("Start");

    setTimeout(() => {
        console.log("Timeout here");
    }, 0);

    Promise.resolve().then(() => {
        console.log("Promise here");
    });

    console.log("End");
};

readFileWithAsyncAwait();
readFileWithCallback();
readFileWithPromise();
eventLoopDemo();
