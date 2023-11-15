"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employee_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee_info.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      full_name: DataTypes.STRING,
      employee_id: DataTypes.UUID,
      user_id: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employee_info",
    }
  );
  return employee_info;
};
