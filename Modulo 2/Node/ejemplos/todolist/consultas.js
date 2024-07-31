const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const dbConfig = {
    user: "SYSTEM",
    password: 'CFP2024',
    connectString: "192.168.52.79:1521/XE"
}

async function run(query, params) {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(query, params);
    await connection.close()
    return result;
}

module.exports = run;