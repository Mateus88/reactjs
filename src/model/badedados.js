var Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'db2dk3nabj12mt',  //data base
    'hqhpakguwhppki',  // user
    '6728473ca15b073b29ad87ea7111c54f73a53759a2d16d670db6041217533030',    //password
{
host: 'ec2-34-193-101-0.compute-1.amazonaws.com',
port: '5432',

dialect: 'postgres',
dialectOptions: {
    ssl: {
    rejectUnauthorized: false
    }
    }
});
module.exports = sequelize;


//ESTE É O ORIGINAL DO BACKEND