const Application = require("../models/application.js");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Club = require("../models/club");
const User = require("../models/user.js");

const create = catchAsync(async (req, res, next) => {
  const clubId = req.params.id;
  const club = await Club.findById(clubId);
  if (!club) {
    return next(new AppError("No club found with that ID", 404));
  }
  if (!club.acceptingStudents) {
    return next(
      new AppError("Club is currently not accepting applications", 404)
    );
  }
  const user = req.user;
  const alreadyAppliedStudents = club.studentsApplied;
  if (alreadyAppliedStudents.includes(user._id)) {
    return next(new AppError("You have already applied", 404));
  }

  const alreadyMembers = club.members;
  if (alreadyMembers.includes(user._id)) {
    return next(new AppError("You are already a member of this club", 404));
  }

  req.body.club = clubId;
  req.body.student = user._id.toString();
  const newApplication = await Application.create(req.body);
  club.studentsApplied.push(newApplication.student);
  await Club.findByIdAndUpdate(clubId, club, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({
    status: "success",
    data: {
      application: newApplication,
    },
  });
});

const getAllApplications = catchAsync(async (req, res, next) => {
  const clubId = req.params.id;
  const club = await Club.findById(clubId);
  if (!club) {
    return next(new AppError("No club found with that ID", 404));
  }
  const user = req.user;
  console.log(club.coordinator === user._id);
  if (!club.coordinator.equals(user._id)) {
    return next(new AppError("You are not the coordinator of this club", 403));
  }
  const applications = await Application.find({ club: clubId });
  res.status(200).json({
    status: "success",
    data: {
      applications,
    },
  });
});

const rejectApplication = catchAsync(async (req, res, next) => {
  const user = req.user;
  const clubId = req.params.clubId;
  const club = await Club.findById(clubId);
  if (!user.equals(club.coordinator)) {
    return next(new AppError("You are not the coordinator of this club", 403));
  }
  const applicationId = req.params.applicationId;
  const application = await Application.findByIdAndDelete(applicationId);
  if (!application) {
    return next(new AppError("No application found with that ID", 404));
  }
  const applications = await Application.find();
  const student = await User.findById(application.student);
  let studentsApplied = club.studentsApplied;
  studentsApplied = studentsApplied.filter((id) => !id.equals(student._id));

  await Club.findByIdAndUpdate(
    clubId,
    { studentsApplied: studentsApplied },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: {
      applications,
    },
  });
});

const acceptApplication = catchAsync(async (req, res, next) => {
  const user = req.user;
  let clubsOfUser = user.clubs;
  const userId = user._id;
  const clubId = req.params.clubId;
  const club = await Club.findById(clubId);
  if (!user.equals(club.coordinator)) {
    return next(new AppError("You are not the coordinator of this club", 403));
  }
  const applicationId = req.params.applicationId;
  const application = await Application.findById(applicationId);
  if (!application) {
    return next(new AppError("No application found with that ID", 404));
  }
  const student = await User.findById(application.student);
  const newMembers = club.members;
  newMembers.push(student);
  //   console.log(student, newMembers);
  let studentsApplied = club.studentsApplied;
  studentsApplied = studentsApplied.filter((id) => !id.equals(student._id));
  const clubsOfStudent = student.clubs;
  clubsOfStudent.push(club);
  //   clubsOfUser.push(club);

  await User.findByIdAndUpdate(
    application.student,
    { clubs: clubsOfStudent },
    { new: true, runValidator: true }
  );

  await Club.findByIdAndUpdate(
    clubId,
    { members: newMembers, studentsApplied: studentsApplied },
    { new: true, runValidators: true }
  );

  await Application.findByIdAndDelete(applicationId);
  res.status(200).json({
    status: "success",
  });
});

module.exports = {
  create,
  getAllApplications,
  rejectApplication,
  acceptApplication,
};
