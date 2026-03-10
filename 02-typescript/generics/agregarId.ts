function agregarId<T>(objeto: T): T & {id: string} {
    return {
        id: Math.random().toString(36).substr(2, 10),
        ...objeto
    }
}

const user = agregarId({
    nombre: "John",
    edad: 20,
});

console.log(user);