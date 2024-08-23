import { Sequelize } from "sequelize";
import { SubscriberModel } from "../models/subscriber.js";
import { UserModel } from "../models/user.js";


const sequelize = new Sequelize("moms", 'postgres', 'abcd', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

let userModel = null;
let subscriberModel = null;
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database Connected successfully.');
    userModel = await UserModel(sequelize);
    subscriberModel = await SubscriberModel(sequelize);
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { connectDB, userModel , subscriberModel};