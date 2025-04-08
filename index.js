console.log("Start");

setTimeout(() => {
    console.log("Timeout here");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise here");
});

console.log("End");