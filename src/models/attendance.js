"use strict";
const { ModelHandle } = require("../helpers/modelHandle");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      // define association here
    }
  }
  Attendance.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      CHECKTIME: DataTypes.DATE,
      CHECKTYPE: DataTypes.STRING,
      VERIFYCODE: DataTypes.STRING,
      USERID: DataTypes.STRING,
      SENSORID: DataTypes.STRING,
      Memoinfo: DataTypes.STRING,
      sn: DataTypes.STRING,
      WorkCode: DataTypes.STRING,
      UserExtFmt: DataTypes.INTEGER,
      mask_flag: DataTypes.INTEGER,
      temperature: DataTypes.DOUBLE,
      name: DataTypes.STRING,
      Badgenumber: DataTypes.STRING,
    },
    {
      sequelize,
      ...ModelHandle.paranoidFunction("Attendance", "attendances"),
    }
  );
  return Attendance;
};
