import { DataTypes } from "sequelize";

const Request = (db) => {
    return db.define("request", {
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

export default Request;
