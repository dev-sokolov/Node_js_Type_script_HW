import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const User = sequelize.define(
    "user",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        telNumber: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)

// User.sync();

export default User;












