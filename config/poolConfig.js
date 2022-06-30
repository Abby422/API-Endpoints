const mssql = require('mssql')
const sqlConfig = require('./config')

async function poolConfig() {
    let pool = await mssql.connect(sqlConfig);
        if (pool.connected) {
            console.log("Database connected succesfully")
            return pool}
}

module.exports = poolConfig