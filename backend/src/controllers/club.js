// import { asyncHandler } from "../utils/asyncHandler.js";
const Club = require("../models/club");
const { createSiteData } = require("../helpers/fileHelper.js");
const catchAsync = require("../utils/catchAsync.js");
const AppError = require("../utils/appError.js");

const create = catchAsync(async (req, res, next) => {
  const { clubName } = req.body;
  const existingClub = await Club.findOne({ clubName });
  if (existingClub) {
    return next(new AppError("Club already exists!", 401));
  }
  const newClub = await Club.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      club: newClub,
    },
  });
});

const getAllClubs = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "friends"];
  excludedFields.forEach((el) => delete queryObj[el]);
  //   console.log(req.query, queryObj);
  const query = Club.find(queryObj);

  const clubs = await query;

  res.status(200).json({
    status: "success",
    results: clubs.length,
    data: {
      clubs,
    },
  });
});

const getClub = catchAsync(async (req, res, next) => {
  const club = await Club.findById(req.params.id);

  if (!club) {
    return next(new AppError("No club found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      club,
    },
  });
});

const updateClub = catchAsync(async (req, res, next) => {
  if ("acceptingStudents" in req.body) {
    req.body.studentsApplied = [];
  }
  const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!club) {
    return next(new AppError("No club found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      club,
    },
  });
});

const deleteClub = catchAsync(async (req, res, next) => {
  const club = await Club.findByIdAndDelete(req.params.id, req.body);
  if (!club) {
    return next(new AppError("No club found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
  });
});

module.exports = { create, getAllClubs, getClub, updateClub, deleteClub };
