const miURL = new URL('https://www.ejemplo.com:8080/ruta?nombre=valor#fragmento');

console.log('Protocolo:', miURL.protocol); // 'https:'
console.log('Host:', miURL.host); // 'www.ejemplo.com:8080'
console.log('Hostname:', miURL.hostname);
console.log('Puerto:', miURL.port); // '8080'
console.log('Ruta:', miURL.pathname); // '/ruta'
console.log('Búsqueda:', miURL.search); // '?nombre=valor'
console.log('Hash:', miURL.hash); // '#fragmento'       