import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from 'uuid';

export const SubscriberModel = async (sequelize) => {
  const Subscriber = sequelize.define("Subscriber", {
    id: {
      type: DataTypes.UUID, 
      defaultValue: uuidv4, 
      primaryKey: true, 
      allowNull: false,
    },
    contactPersonName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
      },
    },
    contactPersonImage: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 100],
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [7, 15],
        isNumeric: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 1000],
      },
    },
    accountType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 100],
      },
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "name",
      validate: {
        len: [4, 100],
      },
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "demo@gmail.com",
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    companyPhone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "03246002877",
      validate: {
        len: [7, 15],
        isNumeric: true,
      },
    },
    companyAddress: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Demo Street",
      validate: {
        len: [5, 255],
      },
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "51522",
      validate: {
        len: [4, 10],
        isNumeric: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Lahore",
      validate: {
        len: [2, 100],
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Pakistan",
      validate: {
        len: [2, 100],
      },
    },
  });

  return Subscriber;
};
