let condition = true;
var promise = new Promise(function(resolve, reject) { 
    // Simulate an asynchronous operation using setTimeout
    if(condition){
        setTimeout(function() {
            // Resolve the promise with a value
            resolve(20);
        }, 2000); // Wait for 2 seconds before resolving
    }else{
        reject("Error: Condition is false, promise rejected.");
    }
});

promise.then(val => console.log(val))
.catch(err => console.log(err))
.finally(() => console.log("Promise settled.")); 