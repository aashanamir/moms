import { userModel as User } from '../config/db.js';
import bcrypt from 'bcrypt';
import { catchAsyncError } from "../middlewares/catchAsyncError.js"
import { ErrorHandler } from "../utils/ErrorHandler.js";

export const createUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Please Fill All the Required Feilds", 400));
  }

  let user = await User.findOne({ where: { email } });

  if (user) {
    return next(new ErrorHandler("User Already Exist With This Email", 404));
  }

  user = await User.create({ name, email });

  res.status(200).json({
    success: true,
    user,
  })

});