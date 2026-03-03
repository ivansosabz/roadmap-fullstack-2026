const data = [{
    title: "Aprendiendo JavaScript",
    description: "Aprendiendo JavaScript",
    status: "pending"
}, {
    title: "Aprendiendo JavaScript",
    description: "Aprendiendo JavaScript",
    status: "pending"
}, {
    title: "Aprendiendo JavaScript",
    description: "Aprendiendo JavaScript",
    status: "pending"
}];

// const data = [];

function getData() {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject("No hay datos");
        }
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

getData()
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
