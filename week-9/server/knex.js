const options = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'realestate'
    }
}
module.exports = require('knex')(options);