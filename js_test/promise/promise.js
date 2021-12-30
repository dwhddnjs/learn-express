function sayHello() {
    return new Promise((res, rej)=>{
        res('hello')
        rej(new Error())
    })
}

async function test(){
    const hello1 = await sayHello()
    console.log(hello1)
}

test()

// sayHello().then((data)=> {
//     console.log(data)
//     return data
// }).then((data) => {
//     console.log(data)
//     return data
// })
// .catch((err) => {
//     console.log(err)
// })