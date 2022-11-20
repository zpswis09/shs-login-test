const Sequelize = require("sequelize");

module.exports = class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        total: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        paymentId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Order",
        tableName: "orders",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Order.belongsTo(db.User);
    db.Order.hasMany(db.OrderItem);
    db.Order.belongsToMany(db.Payment, {
      through: "Checkout",
    });
  }
};
