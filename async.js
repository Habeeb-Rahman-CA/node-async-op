// console.log('first')
// console.log('second')
// console.log('third')

console.log('start operation')
function sleep(ms){
    // let starttime = new Date().getTime() 
    console.log("operatiion is running")
    setTimeout(() => {
        console.log("operation is done")
    }, ms)
    // while (new Date().getTime() < starttime + ms) {
    //     console.log('In progress')
    // }
    // console.log('operation is done')
}

sleep(1000)

console.log('do something else')
