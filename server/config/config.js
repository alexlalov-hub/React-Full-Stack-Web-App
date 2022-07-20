const { PORT, DB_NAME, DB_CONNECTION } = process.env

module.exports = {
    port: PORT || 5000,
    dbConnection: `${DB_CONNECTION}/${DB_NAME}`
}