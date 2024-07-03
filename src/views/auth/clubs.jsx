

import React, { useState, useEffect } from 'react';
import Header from "../../components/shared/Header";
import Card from "../../components/Core/Card";
import Footer from "../../components/shared/Footer";
import DashboardSidebar from "../../components/shared/DashboardSidebar.jsx";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import robotics from "../../assets/images/clubs.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Shimmer from "../../components/common/shimmer.jsx"
import Faq from "../../components/Core/Faq.jsx";
const DashboardComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    AOS.init({ duration: 1200, delay: 500 });
    AOS.refresh();

   
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []);

  return (
    <div className="w-full">
      <Header />
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="sm:ml-64 flex py-5 flex-col flex-grow">
          <div className="flex items-center justify-center mb-6 py-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              Welcome, {user?.name}!
            </h2>
          </div>
          <Outlet />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mx-6"> {}
            {loading ? ( 
              <>
                <div data-aos="fade-up">
                  <Shimmer /> {}
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <Shimmer />
                </div>
                <div data-aos="fade-left" data-aos-delay="200">
                  <Shimmer />
                </div>
                <div data-aos="fade-right" data-aos-delay="300">
                  <Shimmer />
                </div>
                <div data-aos="fade-left" data-aos-delay="400">
                  <Shimmer />
                </div>
                <div data-aos="fade-right" data-aos-delay="400">
                  <Shimmer />
                </div>
              </>
            ) : (
              <> {}
                <div data-aos="fade-left">
                  <Card
                    imageUrl={robotics}
                    altText="A description of the card image"
                    title="RoboWarriors"
                    description="Welcome to RoboWarriors, the elite force of engineering enthusiasts and tech innovators! Our club is a dynamic hub where passion for robotics meets cutting-edge technology."
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <Card
                    imageUrl={robotics}
                    altText="A description of the card image"
                    title="Another interesting title"
                    description="Some other interesting description for this card."
                  />
                </div>
                <div data-aos="fade-right" data-aos-delay="200">
                  <Card
                    imageUrl={robotics}
                    altText="A description of the card image"
                    title="Yet another title"
                    description="Another descriptive text for this card."
                  />
                </div>
                <div data-aos="fade-left" data-aos-delay="300">
                  <Card
                    imageUrl={robotics}
                    altText="A description of the card image"
                    title="Fourth title"
                    description="Description for the fourth card."
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <Card
                    imageUrl={robotics}
                    altText="A description of the card image"
                    title="Fifth title"
                    description="Description for the fifth card."
                  />
                </div>
                <div data-aos="fade-right" data-aos-delay="400">
                  <Card
                    imageUrl={robotics}
                    altText="A description of the card image"
                    title="Sixth title"
                    description="Description for the sixth card."
                  />
                </div>
              </>
            )}
            
          </div>
        </div>
        <section className="our-achievements mx-16 mt-12 mb-16">
         
         <div>
           <Faq/>
         </div>
         </section>


        <Footer />
      </div>
    </div>
  );
};

export default DashboardComponent;





