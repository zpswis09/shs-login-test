const Sequelize = require("sequelize");

module.exports = class Admin extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        adminName: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        role: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        telephone: {
          type: Sequelize.STRING(13),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Admin",
        tableName: "admin",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
