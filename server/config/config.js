const { PORT, DB_NAME, DB_COLLECTION } = process.env

module.exports = {
    port: PORT || 3300,
    dbConnection: `${DB_COLLECTION}/${DB_NAME}`
}