require('dotenv').config()

module.exports= {

    // "config": {
    //     "server": "localhost",
    //     "authentication": {
    //         "type": "default",
    //         "options": {
    //             "userName": "process.env.USERNAME",
    //             "password": "process.env.PASSWORD"
    //         }
    //     },
    //     "options": {
    //         "port": 1433,
    //         "database": "process.env.DATABASE"
    //     }
    // }


    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    server: 'localhost',

    port: 1433,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, 
      trustServerCertificate: true 
    }
}