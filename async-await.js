const userLogin = () => {
    console.log("Enter user name and password")
    let username = prompt("Enter Username")
    let password = prompt("Enter Password")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Performing User Authenticaition")
            if (username === 'habi' && password === 'habi1234') {
                resolve('User is authenticated')
            } else {
                reject("Authentication is failed")
            }
        }, 1000)
    })
}

function goToHome(userAuthStatus) {
    return Promise.resolve(`Go to home page as : ${userAuthStatus}`)
}

// userLogin().then((response) =>{
//     console.log("Validate user")
//     return goToHome(response)
// }).then((userAuthStatus) => {
//     console.log(userAuthStatus)
// })

async function performTask() {
    try {
        const response = await userLogin()
        console.log("validate user")
        const userAuthStatus = await goToHome(response)
        console.log(userAuthStatus)
    } catch (error) {
        console.log(error)
    }
}

performTask()