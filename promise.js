const promise = new Promise((resolve, reject) => {
    console.log("Async task execution")
    if (true) {
        resolve()
        console.log("success")
    } else {
        reject()
        console.log("failed")
    }
})

promise.then(
    () => {
        
    },
    () => {
        
    }
)