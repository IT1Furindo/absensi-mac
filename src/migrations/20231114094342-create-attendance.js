"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("attendances", {
      id: {
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      CHECKTIME: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      CHECKTYPE: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      VERIFYCODE: {
        type: Sequelize.STRING(62),
      },
      SENSORID: {
        type: Sequelize.STRING(20),
      },
      Memoinfo: {
        type: Sequelize.STRING(40),
      },
      sn: {
        type: Sequelize.STRING(30),
      },
      WorkCode: {
        type: Sequelize.STRING(34),
      },
      UserExtFmt: {
        type: Sequelize.INTEGER,
      },
      mask_flag: {
        type: Sequelize.INTEGER,
      },
      USERID: {
        type: Sequelize.INTEGER,
      },
      temperature: {
        type: Sequelize.DOUBLE,
      },
      name: {
        type: Sequelize.STRING,
      },
      Badgenumber: {
        type: Sequelize.STRING(34),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("attendances");
  },
};
