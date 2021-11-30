module.exports = (sequelize, DataTypes) => {
    const Nota = sequelize.define('Nota',{
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        usuarioId:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:"usuario",
                key:"id",
            }
        },
        descricao:{
            type:DataTypes.TEXT,
            allowNull: true,
        },
        
    },{
        tableName:'nota',
        timestamps:false,
    }
    );
    return Nota;
}