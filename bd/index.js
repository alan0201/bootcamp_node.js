const { Sequelize } = require("sequelize");
const bd = {};

const opitions = {
    username:"admin",
    password:"notes123",
    database:"notes",
    dialect:"mysql",
    host:"notes.cgssmrnlwpdu.us-east-2.rds.amazonaws.com",
};

const sequelize = new Sequelize(opitions);
sequelize.authenticate().then(() => {
    console.log("Conectado ao banco "+ opitions.database);
}).catch((erro) => {
    console.log("Erro ao se conectar ao banco "+ opitions.database);
    console.log(erro);
});

bd.Sequelize = Sequelize;
bd.sequelize = sequelize;

module.exports = bd;
