const User = require('./User');
const Quiz = require('./Quiz');
const Question = require('./Question');
const Option = require('./Option');

User.hasMany(Quiz, {
  foreignKey: 'user_id'
});

Quiz.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  onDelete: 'SET NULL'
});

Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  onDelete: 'SET NULL'
});

Option.belongsTo(Question, {
  foreignKey: question_id,
});

Question.hasMany(Option, {
  foreignKey: question_id,
  onDelete: 'SET NULL'
});

module.exports = { User, Quiz, Question, Option };