"use strict";
const { Model } = require("sequelize");
const { ModelHandle } = require("../helpers/modelHandle");
module.exports = (sequelize, DataTypes) => {
  class fetch_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fetch_log.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      last_fetch: DataTypes.DATE,
      fetch_url: DataTypes.STRING,
      table_name: DataTypes.STRING,
      fetch_status: DataTypes.STRING,
    },
    {
      sequelize,
      ...ModelHandle.paranoidFunction("FetchLog", "fetch_logs"),
    }
  );
  return fetch_log;
};
