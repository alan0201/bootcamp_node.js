const { Sequelize, DataTypes } = require("sequelize");
const inicializarUsuario = require("./Usuario");
const inicializarNota = require("./Nota");
const inicializarChecklist = require("./Checklist");
let bd = {};

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

const Usuario = inicializarUsuario(sequelize, DataTypes);
const Nota = inicializarNota(sequelize, DataTypes);
const Checklist = inicializarChecklist(sequelize, DataTypes);

Nota.hasMany(Checklist, {as: "checklists", foreignKey: "notaId"});
Nota.belongsTo(Usuario, {as: "usuario", foreignKey:"usuarioId"});

bd = {Usuario, Nota, Checklist};

bd.Sequelize = Sequelize;
bd.sequelize = sequelize;

module.exports = bd;
