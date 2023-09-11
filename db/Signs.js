import { DataTypes } from "sequelize";

const Signs = (db) => {
    return db.define("sign", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        details: DataTypes.TEXT,
        type: DataTypes.STRING,
    });
};

export default Signs;
