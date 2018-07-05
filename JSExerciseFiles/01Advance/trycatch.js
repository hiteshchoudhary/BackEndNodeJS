const convertToRs = (dollar) =>  {
    if (typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error('Amount needs to be in number')
    }
}

// const myValue = convertToRs('five')
// console.log(myValue);

try {
    const myValue = convertToRs('five')
    console.log(myValue);
} catch (e) {
    console.log(e);
    
}

console.log('I will not run if program crashes');





