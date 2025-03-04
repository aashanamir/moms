import { DataTypes } from "sequelize";

export const UserModel = async (sequelize)=>{
  const User = sequelize.define("User" , {
    name : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    email : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
    }
  });

  return User;
}