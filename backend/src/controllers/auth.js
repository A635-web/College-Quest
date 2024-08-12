// const { ApiError } = require("../utils/ApiError.js");
const { promisify } = require("util");
const userModel = require("../models/user.js");
const jwt = require("jsonwebtoken");
const { validationResult: validate } = require("express-validator");
const { statusCode: SC } = require("../utils/statusCode");
const { loggerUtil: logger, loggerUtil } = require("../utils/logger");
const formidable = require("formidable");
const { createSiteData } = require("../helpers/fileHelper.js");
const AppError = require("../utils/appError.js");
const catchAsync = require("../utils/catchAsync.js");
const Club = require("../models/club.js");

const signup = catchAsync(async (req, res, next) => {
  const errors = validate(req) || [];
  if (!errors.isEmpty()) {
    return res.status(SC.WRONG_ENTITY).json({
      status: SC.WRONG_ENTITY,
      error: errors.array()[0]?.msg,
    });
  }
  const { email, phoneNumber } = req.body;
  const existingUser = await userModel.findOne({
    $or: [{ email: email }, { phoneNumber: phoneNumber }],
  });
  if (existingUser) {
    console.log(existingUser);
    return next(
      new AppError(
        "User already exists with that email id or phone number",
        404
      )
    );
  }
  // req.body.role = "student";
  const newUser = await userModel.create(req.body);
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: 7776000000,
  });
  res.cookie("jwt", token, {
    maxAge: 90 * 86400 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  return res.status(201).json({
    status: "success",
    token,
    user: newUser,
  });
});

const signin = catchAsync(async (req, res, next) => {
  const errors = validate(req);
  if (!errors.isEmpty()) {
    return res.status(SC.WRONG_ENTITY).json({
      error: errors.array()[0].msg,
    });
  }

  const { email, phoneNumber, password } = req.body;
  const body = req.body;
  delete body.password;
  const user = await userModel.findOne({ ...body });

  if (!user) {
    return next(
      new AppError("No user exists with given email id/password", 404)
    );
  }

  if (!user.authenticate(password)) {
    return next(new AppError("Invalid credentials", 401));
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 90 * 86400 * 1000,
  });

  res.cookie("jwt", token, {
    maxAge: 90 * 86400 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  user.salt = undefined;
  user.__v = undefined;

  return res.status(200).json({
    message: "User Logged in Successfully!",
    token,
    user,
  });
});

const signout = (_, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
    message: "User Signed Out Sucessfully!",
  });
};

// const forgotPassword = async (req, res) => {
// 	try {
// 		const errors = validate(req) || []
// 		if (!errors.isEmpty()) {
// 			return res.status(SC.WRONG_ENTITY).json({
// 				status: SC.WRONG_ENTITY,
// 				error: errors.array()[0]?.msg
// 			})
// 		}
// 		const { newPassword, countryCode, phoneNumber, otp } = req.body
// 		try {
// 			userModel.findOne({ phoneNumber: phoneNumber }).then(userWithPhone => {
// 				if (userWithPhone) {
// 					twilio.verify.v2.services(twilioServiceSID)
// 						.verificationChecks
// 						.create({ to: `+${countryCode}${phoneNumber}`, code: otp })
// 						.then(verification_check => {
// 							if (verification_check.status === "approved") {
// 								userWithPhone.password = newPassword
// 								userWithPhone.save()
// 									.then(newUserData => {

// 										const expiryTime = new Date()
// 										expiryTime.setMonth(expiryTime.getMonth() + 6)
// 										const exp = parseInt(expiryTime.getTime() / 1000)
// 										const token = jwt.sign(
// 											{ _id: newUserData._id, exp: exp },
// 											process.env.SECRET || 'college-predictor'
// 										)
// 										res.cookie('Token', token, { expire: new Date() + 9999 })
// 										newUserData.salt = undefined
// 										newUserData.__v = undefined

// 										res.status(SC.OK).json({
// 											status: SC.OK,
// 											message: "Password Successfully Updated.",
// 											data: newUserData,
// 											token
// 										})
// 									})
// 									.catch(err => res.status(SC.BAD_REQUEST).json({
// 										status: SC.BAD_REQUEST,
// 										message: err.message
// 									}));
// 							}
// 							else {
// 								return res.status(SC.BAD_REQUEST).json({
// 									status: SC.BAD_REQUEST,
// 									error: "Entered OTP is Invalid."
// 								})
// 							}
// 						}).catch(err => res.status(err.status).json({
// 							status: err.status,
// 							error: { err }
// 						}))
// 				}
// 				else {
// 					return res.status(SC.NOT_FOUND).json({
// 						status: SC.NOT_FOUND,
// 						error: "User Not Fount."
// 					});
// 				}
// 			}).catch()
// 		} catch (err) {
// 			res.status(SC.BAD_REQUEST).json({
// 				status: SC.BAD_REQUEST,
// 				error: "Something went Wrong."
// 			})
// 		}
// 	} catch (err) {
// 		loggerUtil(err, 'ERROR')
// 	} finally {
// 		loggerUtil(`Forgot Password API Called.`)
// 	}
// }

const updateRole = catchAsync(async (req, res, next) => {
  const role = req.body.role;
  let user = await userModel.findById(req.params.id);
  let club = await Club.findById(req.params.clubId);
  if (!user) next(new AppError("No user found with that ID", 404));
  let newClubs = user.clubs;
  newClubs = [club._id];
  await userModel.findByIdAndUpdate(
    user._id,
    { clubs: newClubs },
    { new: true, runValidators: true }
  );

  const currentRole = user.role;
  if (currentRole === role) {
    return next(new AppError(`User is already a ${role}.`, 404));
  } else {
    // user.updateOne()
    user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    const members = club.members;
    if (!members.includes(user._id)) members.push(user);
    club = await Club.findByIdAndUpdate(
      req.params.clubId,
      { coordinator: user, members: members },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        user,
        club,
      },
    });
  }
});

const update = catchAsync(async (req, res, next) => {
  let user = await userModel.findById(req.params.id);
  const currentUser = req.user;
  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }
  if (user.email !== currentUser.email) {
    return next(new AppError("You are not authorized for this action", 403));
  }
  user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

const isLoggedIn = catchAsync(async (req, res, next) => {
  if (req.cookies.jwt) {
    const decoded = await promisify(jwt.verify)(
      req.cookies.jwt,
      process.env.JWT_SECRET
    );

    const currentUser = await userModel.findById(decoded._id);
    if (!currentUser) return next();
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next();
    }
    res.locals.user = currentUser;
    next();
  }
  next();
});

const protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);
  const freshUser = await userModel.findById(decoded.id || decoded._id);
  console.log(freshUser);
  if (!freshUser) {
    return next(new AppError("User does not exist", 401));
  }
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "User recently changed his password. Please log in again!",
        401
      )
    );
  }
  req.user = freshUser;
  next();
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You don't have permission to perform this action", 403)
      );
    }
    next();
  };
};

const getStudentClubs = catchAsync(async (req, res, next) => {
  const clubIds = req.user.clubs;
  let clubs = [];
  for (const clubId of clubIds) {
    const club = await Club.findById(clubId);
    clubs.push(club);
  }
  res.status(200).json({
    status: "success",
    data: {
      clubs,
    },
  });
});

module.exports = {
  signup,
  signin,
  signout,
  updateRole,
  update,
  protect,
  isLoggedIn,
  restrictTo,
  getStudentClubs,
};
