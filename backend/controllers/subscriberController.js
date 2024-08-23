import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import {ErrorHandler} from "../utils/ErrorHandler.js";
import {subscriberModel as Subscriber} from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = catchAsyncError(async (req, res, next) => {
  const { contactPersonName, designation, phoneNumber, email, password, accountType, companyType } = req.body;

  if (!contactPersonName || !designation || !phoneNumber || !email || !password || !accountType || !companyType) {
    return next(new ErrorHandler("Please Fill All The Required Fields", 400));
  }

  let subscriber = await Subscriber.findOne({ where: { email } });

  if (subscriber) {
    return next(new ErrorHandler("User Already Exists With This Email", 404));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  subscriber = await Subscriber.create({
    contactPersonName,
    designation,
    phoneNumber,
    email,
    password: hashedPassword,
    accountType,
    companyType,
  });

  const token = jwt.sign({ id: subscriber.id }, process.env.JWT_SECRET, {
    expiresIn: "1d", 
  });

  res.status(200).json({
    success: true,
    token,
    subscriber,
  });
});