const express = require("express");
const router = express.Router();
const {
    create,
    updateClub,
    getAllClubs,
    getClub,
    deleteClub,
} = require("../controllers/club");

const applicationController = require("../controllers/applicationController");

const authController = require("../controllers/auth");

router.post(
    "/",
    authController.protect,
    authController.restrictTo("admin"),
    create
);
router.post(
    "/update/:id",
    authController.protect,
    authController.restrictTo("coordinator", "admin"),
    updateClub
);
router.delete(
    "/delete/:id",
    authController.protect,
    authController.restrictTo("admin"),
    deleteClub
);
router.get("/", authController.protect, getAllClubs);
router.get("/:id", authController.protect, getClub);

router.post(
    "/:id/applications/create",
    authController.protect,
    authController.restrictTo("student", "coordinator"),
    applicationController.create
);

router.get(
    "/:id/applications",
    authController.protect,
    authController.restrictTo("coordinator"),
    applicationController.getAllApplications
);

router.delete(
    "/:clubId/applications/:applicationId",
    authController.protect,
    authController.restrictTo("coordinator"),
    applicationController.rejectApplication
);

router.post(
    "/:clubId/applications/:applicationId",
    authController.protect,
    authController.restrictTo("coordinator"),
    applicationController.acceptApplication
);

module.exports = router;