import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AppLogo from "../../components/images/AppLogo";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import { useSelector } from "react-redux";
import DashboardSidebar from "../../components/shared/DashboardSidebar";
import axios from "axios";
import * as Yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { Formik } from "formik";
import CustomValidationErrorMessage from "../../components/errors/CustomValidationErrorMessage";
import Loader from "../../components/loader/index";
import {
  createApplication,
  acceptApplication,
  rejectApplication,
} from "../../services/applicationService";
import { toast } from "react-toastify";

const applicationValidation = Yup.object({
  reason: Yup.string().required("This field is Required"),
});

export default function Dashboard() {
  // const userOld = useSelector((state) => state?.user);
  const { user } = useAuth();
  // console.log(user);
  // console.log(userOld);
  const [clubs, setClubs] = useState([]);
  // console.log(document.cookie);
  const [clubDropDown, setClubDropDown] = useState(false);
  const [clubsAccepting, setClubsAccepting] = useState([]);
  const [applicationForm, setApplicationForm] = useState(false);
  const [applicationFor, setApplicationFor] = useState([]);
  const [loading, setLoading] = useState(false);

  const [applicationsReceived, setApplicationsReceived] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8006/api/v1/user/clubs"
        );
        setClubs(response.data.data.clubs);
        // console.log(response.data.data.clubs);
      } catch (error) {
        console.error("Error fetching clubs:", error.response);
      }
    };
    fetchClubs();
  }, []);
  useEffect(() => {
    const fetchClubsAccepting = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8006/api/v1/clubs?acceptingStudents=true"
        );
        setClubsAccepting(response.data.data.clubs);
        // console.log(response.data.data.clubs);
      } catch (error) {
        console.error("Error fetching clubs:", error.response);
      }
    };
    fetchClubsAccepting();
  }, []);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8006/api/v1/clubs/${user.clubs[0]}/applications`
        );
        setApplicationsReceived(response.data.data.applications);
      } catch (err) {
        console.log("Error fetching applications:", err.response);
      }
    };
    user.role === "coordinator" && fetchApplications();
  }, []);

  const handleApplication = async (club) => {
    // console.log(club.clubName);
    setApplicationForm(true);
    setApplicationFor(club);
  };
  const handleSubmitApplication = async (values, resetForm) => {
    setLoading(true);
    try {
      const res = await createApplication(values);
      console.log(res);
      if (res.status === 201) toast.success("Application sent successfully!");
      else toast.error(res.data.message);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    resetForm();
  };

  const handleAcceptApplication = async (application) => {
    // const { _id, club } = application;
    setLoading(true);
    try {
      // console.log(application);
      const res = await acceptApplication(application);
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    // console.log(_id, club);
  };
  const handleRejectApplication = async (application) => {
    // const { _id, club } = application;
    setLoading(true);
    try {
      // console.log(application);
      const res = await rejectApplication(application);
      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    // console.log(_id, club);
  };

  // console.log(applicationsReceived);

  return (
    <div className="w-full ">
      <Header />
      <div className="bg-gray-100 flex">
        <DashboardSidebar />
        {applicationForm ? (
          <>
            <section className="application z-99 w-3/4 h-3/4 p-16 top-0 left-0">
              <p
                className="block mx-auto mb-6 underline cursor-pointer"
                onClick={() => setApplicationForm(false)}
              >
                Back
              </p>
              <h1 className="text-center text-4xl font-semibold">
                Application Form
              </h1>
              <p className="text-center mt-3 text-green-700">
                for {applicationFor.clubName}
              </p>
              <Formik
                initialValues={{
                  clubId: applicationFor._id,
                  reason: "",
                  portfolio: "",
                }}
                validationSchema={applicationValidation}
                onSubmit={(values, { resetForm }) =>
                  handleSubmitApplication(values, resetForm)
                }
              >
                {({ values, touched, errors, handleChange, handleSubmit }) => {
                  return (
                    <>
                      <div className="w-11/12 ">
                        <label>
                          Why do you want to join {applicationFor.clubName} ?*
                        </label>
                        <div className="bg-gray-100 text-secondary flex gap-3 items-center px-3 rounded-lg my-5 shadow-lg">
                          {/* <UserIcon className="w-5 h-5" /> */}
                          <input
                            id="reason"
                            placeholder=""
                            className="p-2.5 text-lg rounded-lg bg-gray-100 w-full focus:outline-none"
                            type="username"
                            value={values.reason}
                            onChange={handleChange}
                          />
                        </div>
                        <CustomValidationErrorMessage
                          show={touched.reason && errors.reason ? true : false}
                          error={errors.reason}
                        />
                        <label>Your past work (share drive link)</label>
                        <div className="bg-gray-100 text-secondary flex gap-3 items-center px-3 rounded-lg my-5 shadow-lg">
                          {/* <KeyIcon className="w-5 h-5" /> */}
                          <input
                            id="portfolio"
                            placeholder=""
                            className="p-2.5 text-lg rounded-lg bg-gray-100 w-full focus:outline-none"
                            type="text"
                            value={values.portfolio}
                            onChange={handleChange}
                          />
                        </div>
                        <CustomValidationErrorMessage
                          show={
                            touched.portfolio && errors.portfolio ? true : false
                          }
                          error={errors.portfolio}
                        />

                        <button
                          className="p-2.5 text-lg rounded-lg bg-secondary text-white w-full my-3 shadow-lg"
                          type="submit"
                          onClick={handleSubmit}
                          disabled={loading ? true : false}
                        >
                          {loading ? (
                            <Loader width={25} height={25} />
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </>
                  );
                }}
              </Formik>
            </section>
          </>
        ) : (
          <>
            <section className="p-4 w-screen">
              <div className="m-8">
                <h1 className="text-center text-4xl font-medium">
                  Welcome{" "}
                  <span className="text-green-800 font-semibold">
                    {user.name}
                  </span>
                  !
                </h1>
                <p className="mt-3 text-center">
                  Hope you are enjoying your college life!
                </p>
              </div>
              {clubs.length > 0 ? (
                <div className="mx-8 mt-12 bg-green-800 px-8 py-4 rounded-lg ">
                  <div className="flex content-center justify-between">
                    <h3 className="text-xl text-gray-100">
                      Your Clubs/Societies
                    </h3>
                    <button
                      className="bg-white rounded-full p-2"
                      onClick={() => {
                        setClubDropDown(!clubDropDown);
                      }}
                    >
                      <img
                        src="/dropDown.png"
                        alt="dropDown"
                        className={`w-3 ${clubDropDown ? `` : `rotate-180`}`}
                      ></img>
                    </button>
                  </div>
                  {!clubDropDown ? (
                    <div className="mx-8 mt-3">
                      <ol className="list-decimal text-lg text-green-200">
                        {clubs.map((club, index) => (
                          <li key={index}>{club.clubName}</li>
                        ))}
                      </ol>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <p className="mx-8 mt-12">
                  You are not a part of any club/society
                </p>
              )}
              {user.role === "student" ? (
                <div className="forms_of_clubs mx-8 mt-12 bg-gray-200 px-4 py-8 rounded-lg">
                  <h3 className="font-bold mx-4 mb-6 text-xl text-gray-700">
                    Clubs currently accepting students{" "}
                    {`(${clubsAccepting.length})`}
                  </h3>
                  <div className="club_cards m-3 grid grid-cols-3 gap-8">
                    {clubsAccepting.map((club, index) => (
                      <>
                        <div className="p-4 bg-green-100 rounded-lg">
                          <h2
                            className="font-bold text-green-800 mb-3 text-lg"
                            key={index}
                          >
                            {club.clubName}
                          </h2>
                          <p>{club.description}</p>
                          <button
                            onClick={() => handleApplication(club)}
                            className="mt-5 bg-green-800 py-1 px-4 text-green-100 rounded-xl"
                          >
                            Apply Now
                          </button>
                          <button className="mx-4 text-gray-600 underline text-sm">
                            Learn More
                          </button>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="m-8">
                    <h1 className="font-semibold text-xl">
                      Applications received ({applicationsReceived.length})
                    </h1>
                    <div className="club_cards m-3 grid grid-cols-3 gap-8">
                      {applicationsReceived.map((application, index) => (
                        <>
                          <div className="p-4 bg-green-100 rounded-lg">
                            <h2
                              className="font-semibold text-green-800 mb-3 text-lg"
                              key={index}
                            >
                              Reason to join: {application.reason}
                            </h2>
                            {/* {console.log(application)}; */}
                            <a
                              href={`https://${application.portfolio}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              Portfolio
                            </a>
                            <br></br>
                            <button
                              onClick={() =>
                                handleAcceptApplication(application)
                              }
                              className="mt-5 bg-green-800 py-1 px-4 text-green-100 rounded-xl"
                            >
                              Accept Application
                            </button>
                            <button
                              className="mx-4 text-gray-600 underline text-sm"
                              onClick={() =>
                                handleRejectApplication(application)
                              }
                            >
                              Reject
                            </button>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </section>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
