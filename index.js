function upcase(strings, ...values) {
    
    return values.map(name => name[0].toUpperCase() + name.slice(1)
    .join(' ') + strings[2]);
}

const person = {
    first: 'grant',
    last: 'knoetze',
    age: 36,
    position: ''

};