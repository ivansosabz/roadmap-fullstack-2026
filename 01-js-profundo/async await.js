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

async function main() {
    const books = await getData();
    console.log(books);
}

main();
