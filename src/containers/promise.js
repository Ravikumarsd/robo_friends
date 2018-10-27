const promise = new Promise((resolve,reject) => {
    if(true)
    {
    resolve("Stuff worked");
    }
    else{
    reject("Error it broke!");
    }
})

promise
        .then(result => result + '!')
        .then(result2 => {
            console.log(result2);
        })
