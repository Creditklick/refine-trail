const dbConfig = async () => {
    const sequelize = require('./database');
    const Lead = require('../models/Leads.model')
    const result = await sequelize.sync();
}
module.exports = dbConfig;