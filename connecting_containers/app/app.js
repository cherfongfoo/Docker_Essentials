const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'database',
  database: 'nodejs',
  password: 'newpassword',
  port: 5432
})

client.connect()

client.query('SELECT * FROM hello', (err, res) => {
  console.log(res.rows[0].message)
  client.end()
})
