const customers = require('./customers.json');

customers.forEach(customer => {
    const { name, dob, address } = customer;

    console.log('');
    console.log('Name:', name);
    console.log('Date of birth:', dob);
    console.log('Address:', address);
})
