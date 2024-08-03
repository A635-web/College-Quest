const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");
const {
    signup,
    signin,
    signout,
    updateRole,
    update,
    protect,
    restrictTo,
    getStudentClubs,
} = require("../controllers/auth");
// const {
//   isSignedIn,
//   isValidToken,
//   isAdmin,
// } = require("../controllers/middleware");

router.post(
    "/signup", [
        check("name")
        .isLength({ min: 3 })
        .withMessage("Name length should be minimum of 3 characters"),
        check("email").isEmail().withMessage("Please provide a valid E-Mail!"),
        check("phoneNumber")
        .isMobilePhone()
        .withMessage("Please provide a valid Phone Number!"),
        check("countryCode")
        .isLength({ min: 1 })
        .withMessage("Please Select Country Code"),
        check("year").isLength().withMessage("Please Select year"),
        check("Role").isLength().withMessage("Please Select Role"),

        check("password")
        .isLength({ min: 8 })
        .withMessage("Password length should be minimum of 8 characters"),
    ],
    signup
);

router.post(
    "/signin", [
        check("password")
        .isLength({ min: 1 })
        .withMessage("Password field is required"),
    ],
    signin
);

router.post(
    "/update/role/:id/:clubId",
    protect,
    restrictTo("admin"),
    updateRole
);

router.get("/verify", signout);

router.get("/clubs", protect, getStudentClubs);

router.post("/update/:id", protect, update);

router.get("/signout", signout);

module.exports = router;