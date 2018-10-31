const customers = require('./customers.json');

customers.forEach(customer => {
    const { name, dob } = customer;

    console.log('');
    console.log('Name:', name);
    console.log('Date of birth:', dob);
})