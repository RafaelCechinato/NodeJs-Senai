const { Client } = require('pg');


const client = new Client('postgres://guvbmfhe:0sl8DR1tV-NiLgBR5fFU4RXogVWoHRv_@isabelle.db.elephantsql.com/guvbmfhe')


    /*client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
    })*/

module.exports = client

/*const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

const client = new Client({
connectionString: connectionString,*/
