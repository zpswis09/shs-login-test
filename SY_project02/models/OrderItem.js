const Sequelize = require("sequelize");

module.exports = class OrderItem extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        orderId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        productId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "OrderItem",
        tableName: "orderItems",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.OrderItem.belongsTo(db.Order);
  }
};
