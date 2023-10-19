const { Client } = require('pg');


const client = new Client(
    {  
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '1234',
        port: 5432 
    })


    /*client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
    })*/

module.exports = client

/*const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

const client = new Client({
connectionString: connectionString,*/
