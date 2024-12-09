// console.log('task is started')
function asyncTask(cb) {
    // console.log("task is running")
    setTimeout(() => {
        cb(null, "This is the data from server")
    }, 0)
}

asyncTask((err, data) => {
    if(err){
        throw err
    } else {
        console.log("data", data)
    }

})

// console.log('task is end')
// const greet = "Hey, good morning!"