import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AppLogo from "../../components/images/AppLogo";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import { useSelector } from "react-redux";
import DashboardSidebar from "../../components/shared/DashboardSidebar";
import axios from "axios";

export default function Dashboard() {
  const user = useSelector((state) => state?.user);
  const [clubs, setClubs] = useState([]);
  console.log(document.cookie);
  const [clubDropDown, setClubDropDown] = useState(false);
  const [clubsAccepting, setClubsAccepting] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8006/api/v1/user/clubs"
        );
        setClubs(response.data.data.clubs);
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
        console.log(response.data.data.clubs);
      } catch (error) {
        console.error("Error fetching clubs:", error.response);
      }
    };
    fetchClubsAccepting();
  }, []);

  const handleApplication = function (e) {
    e.preventDefaults();
  };

  return (
    <div className="w-full ">
      <Header />
      <div className="bg-gray-100 flex">
        <DashboardSidebar />
        <section className="p-4 w-screen">
          <div className="m-8">
            <h1 className="text-center text-4xl font-medium">
              Welcome{" "}
              <span className="text-green-800 font-semibold">{user.name}</span>!
            </h1>
            <p className="mt-3 text-center">
              Hope you are enjoying your college life!
            </p>
          </div>
          {clubs.length > 0 ? (
            <div className="mx-8 mt-12 bg-green-800 px-8 py-4 rounded-lg ">
              <div className="flex content-center justify-between">
                <h3 className="text-xl text-gray-100">Your Clubs/Societies</h3>
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
            <p className="mx-8 mt-12">You are not a part of any club/society</p>
          )}
          <div className="forms_of_clubs mx-8 mt-12 bg-gray-200 px-4 py-8 rounded-lg">
            <h3 className="font-bold mx-4 mb-6 text-xl text-gray-700">
              Clubs currently accepting students {`(${clubsAccepting.length})`}
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
                      onClick={(e) => handleApplication()}
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
          {/* <div className="events_of_clubs mx-8 mt-12 bg-gray-200 px-4 py-8 rounded-lg">
            <h3 className="font-bold mx-4 mb-6 text-xl text-gray-700">
              Upcoming Events (1)
            </h3>
            <div className="club_cards m-3 grid grid-cols-3 gap-8">
              <div className="p-4 bg-green-100 rounded-lg">
                <h2 className="font-bold text-green-800 text-lg">
                  Eloquence 2025
                </h2>
                <h3 className="mb-4 text-gray-700 font-medium text-sm">
                  Organised by : Lit Club
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem nihil facilis nulla dolorum aliquam aperiam,
                  perspiciatis hic quasi sint eum recusandae
                </p>
                <button className="mt-5 bg-green-800 py-1 px-4 text-green-100 rounded-xl">
                  Enroll Now
                </button>
                <button className="mx-4 text-gray-600 underline text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div> */}
          {/* <Outlet /> */}
        </section>
      </div>
      <Footer />
    </div>
  );
}
