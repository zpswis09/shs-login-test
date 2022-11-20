const Sequelize = require("sequelize");

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        desc: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER(10),
          allowNull: false,
          defaultValue: 1,
        },
        category: {
          type: Sequelize.STRING(50),
          allowNull: false,
          defaultValue: 1,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Product",
        tableName: "products",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Product.hasOne(db.OrderItem);
    db.Product.hasMany(db.CartItem);
  }
};
