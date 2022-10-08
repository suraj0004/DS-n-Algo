
const HashTable = require('./HashTable');

(() => {
    const table = new HashTable(10);

    table.insert({
        data: 8954215785,
        key: "Suraj"
    })

    table.insert({
        data: 9754812358,
        key: "Mummy"
    })

    table.insert({
        data: 9865210023,
        key: "Papa"
    })

    table.insert({
        data: 1122554477,
        key: "jaruS"
    })

    table.print()

    let find;
    find = table.get('Suraj');
    console.log('\n finding Suraj');
    if(find){
        console.log(find);
    }else{
        console.log('Not found');
    }

})()