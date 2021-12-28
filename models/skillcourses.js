const Courses = require('./courses');
const {sequelize,DataTypes} = require('./index')
  const SkillCourses = sequelize.define(
    "SkillCourses",
    {
      status: DataTypes.INTEGER,
      skillId: DataTypes.INTEGER,
      courseId:{
        type: DataTypes.INTEGER,
        references:{
          model:Courses,
          key:'id'
      }
      }
    },
    {}
  );
  SkillCourses.belongsTo(Courses,{foreignKey:'courseId',onUpdate: 'CASCADE', onDelete: 'CASCADE'});
  module.exports =  SkillCourses;
