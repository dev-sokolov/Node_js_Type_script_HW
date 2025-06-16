import sequelize from "./sequelize.js";
import { DataTypes } from "sequelize";

const App = sequelize.define(
    "app", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        timestamps: false
    }
)

// App.sync();

export default App;