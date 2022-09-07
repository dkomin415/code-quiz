const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Option extends Model {}

Option.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    option: {
      type: DataTypes.STRING,
      allowNull: false
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    correct: {
      type: DataTypes.BOOLEAN,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'option'
  }
);

module.exports = Option;
