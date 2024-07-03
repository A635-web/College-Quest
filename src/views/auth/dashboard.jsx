// import React from 'react';

// const DashboardComponent = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-800">Welcome, John Doe!</h2>
//           <p className="text-gray-500">Student ID: 123456789</p>
//         </div>
//         <img
//           className="h-12 w-12 rounded-full object-cover"
//           src="/path/to/profile-picture.jpg"
//           alt="Profile"
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-blue-500 text-white rounded-lg p-4 flex items-center">
//           <svg
//             className="w-6 h-6 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             ></path>
//           </svg>
//           <div>
//             <h3 className="text-lg font-semibold">Class Schedule</h3>
//             <p>View and manage your class schedule</p>
//           </div>
//         </div>

//         <div className="bg-green-500 text-white rounded-lg p-4 flex items-center">
//           <svg
//             className="w-6 h-6 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             ></path>
//           </svg>
//           <div>
//             <h3 className="text-lg font-semibold">Grades</h3>
//             <p>Check your grades and academic performance</p>
//           </div>
//         </div>

//         {/* Add more dashboard cards as needed */}
//       </div>
//     </div>
//   );
// };

// export default DashboardComponent;


import React from 'react';

const DashboardComponent = () => {
  return (
    <div
      className="flex gap-8 flex-wrap justify-center bg-gray-300 h-screen py-10"
    >
      <div
        className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
      >
        <div className="flex h-full justify-center items-center">
          <span className="font-bold text-gray-500">Scale</span>
        </div>
      </div>

      <div
        className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-180"
      >
        <div className="flex h-full justify-center items-center">
          <span className="font-bold text-green-600">Rotate</span>
        </div>
      </div>

      <div
        className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4"
      >
        <div className="flex h-full justify-center items-center">
          <span className="font-bold text-amber-500">Translate</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;

// import React, { useState } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// // import AppLogo from "../../components/images/AppLogo";
// import Footer from "../../components/shared/Footer.jsx";
// import Header from "../../components/shared/Header.jsx";
// import { useSelector } from "react-redux";
// import DashboardSidebar from "../../components/shared/DashboardSidebar";

// export default function DashboardComponent() {
//   const user = useSelector((state) => state?.user);

//   return (
//     <div className="w-full ">
//       <Header />
//       <div className="bg-gray-100 min-h-screen">
//         <DashboardSidebar />
//         <div class="p-4 sm:ml-64">
//              <div
//       className="flex gap-8 flex-wrap justify-center bg-gray-300 h-screen py-10"
//     >
//       <div
//         className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
//       >
//         <div className="flex h-full justify-center items-center">
//           <span className="font-bold text-gray-500">Scale</span>
//         </div>
//       </div>

//       <div
//         className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-180"
//       >
//         <div className="flex h-full justify-center items-center">
//           <span className="font-bold text-green-600">Rotate</span>
//         </div>
//       </div>

//       <div
//         className="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-4"
//       >
//         <div className="flex h-full justify-center items-center">
//           <span className="font-bold text-amber-500">Translate</span>
//         </div>
//       </div>
//     </div>





//           {/* <Outlet /> */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }