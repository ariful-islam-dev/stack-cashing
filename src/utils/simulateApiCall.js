const simulateApiCall = (cb)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try {
                const data = cb();
                // console.log(data);
                resolve(data);
            }catch(error){
                reject(error)
            }
        }, 5000)
    })

    return promise
}

module.exports = simulateApiCall;