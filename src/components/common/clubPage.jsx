
import React, { useEffect } from "react";
import "./clubPage.css";
import img_1 from "../../assets/images/hostels.jpg";
import Header from "../shared/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from "../Core/Faq.jsx";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, delay: 500 });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <body className="bg-green-50">
        <div className="cover_image h-screen">
          <img
            src={img_1}
            alt="People celebrating"
            className="h-full w-full opacity-45"
          />
          <p className="text-center text-sm cursor-pointer underline mt-4 font-semibold opacity-55">
            Clubs/MHM
          </p>
        </div>
        <section className="hero_section mx-16 my-12">
          <div className="flex justify-between gap-24 align-middle">
            <div className="hero_text my-auto">
              <p className="text-6xl font-bold">
                Welcome to <span className="text-green-700">MHM!</span>
              </p>
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                laudantium quaerat sit architecto earum nulla nostrum assumenda
                soluta reiciendis? Sit repudiandae vero pariatur enim! Quidem
                magnam est soluta reiciendis a.
              </p>
              <button className="mt-12 px-4 py-2 font-semibold bg-green-700 text-white rounded-full">
                Apply Now
              </button>
              <button className="mt-12 mx-6 px-4 py-2 border border-green-700 text-green-900 rounded-full">
                Learn More
              </button>
            </div>
            <img
              src={img_1}
              alt="photography"
              className="w-1/3 rounded-lg shadow-lg"
              data-aos="fade-up"
            />
          </div>
        </section>
        <hr className="border border-green-900 my-12 w-1/3 block mx-auto opacity-30" />
        <section className="why-to-join mx-16 my-12">
          <h1 className="uppercase tracking-wider font-medium text-xl text-green-500">
            Why to
          </h1>
          <h3 className="text-5xl uppercase mt-2 font-bold text-green-800">
            join us?
          </h3>
          <div className="reason flex justify-between gap-16 content-between mt-8">
            <div className="reason_text my-auto flex flex-col">
              <div className="font-bold text-6xl text-green-400">01</div>
              <p className="mt-4 font-semibold text-2xl text-green-800">
                Lorem ipsum dolor amet
              </p>
              <p className="mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                mollitia tenetur quisquam nemo laborum ea. Nisi distinctio, itaque
                expedita explicabo incidunt vitae, rerum error saepe maiores fuga
                doloremque dolore totam!
              </p>
            </div>
            <img
              src={img_1}
              alt="photography"
              className="w-1/3 display mx-auto"
              data-aos="fade-up"
               data-aos-delay="200"
            />
          </div>
          <div className="reason flex justify-between gap-16 content-between mt-8">
            <img
              src={img_1}
              alt="photography"
              className="w-1/3 display mt-6 mx-auto"
              data-aos="fade-down"
              data-aos-delay="100"
            />
            <div className="reason_text my-auto flex flex-col">
              <div className="font-bold text-6xl text-green-400 ml-auto">01</div>
              <p className="mt-4 font-semibold text-2xl ml-auto text-green-800">
                Lorem ipsum dolor amet
              </p>
              <p className="mt-8 text-right">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                mollitia tenetur quisquam nemo laborum ea. Nisi distinctio, itaque
                expedita explicabo incidunt vitae, rerum error saepe maiores fuga
                doloremque dolore totam!
              </p>
            </div>
          </div>
          <div className="reason flex justify-between gap-16 content-between mt-8">
            <div className="reason_text my-auto flex flex-col">
              <div className="font-bold text-6xl text-green-400">01</div>
              <p className="mt-4 font-semibold text-2xl text-green-800">
                Lorem ipsum dolor amet
              </p>
              <p className="mt-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                mollitia tenetur quisquam nemo laborum ea. Nisi distinctio, itaque
                expedita explicabo incidunt vitae, rerum error saepe maiores fuga
                doloremque dolore totam!
              </p>
            </div>
            <img
              src={img_1}
              alt="photography"
              className="w-1/3 display mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
        </section>
        <hr className="border border-green-900 my-12 w-1/3 block mx-auto opacity-30" />
        <section className="our-achievements mx-16 mt-12 mb-16">
          <h1 className="uppercase tracking-wider font-medium text-xl text-green-500">
            Our
          </h1>
          <h3 className="text-5xl uppercase my-2 font-bold text-green-800">
            Achievements
          </h3>
          <div className="achievement-cards my-12 flex gap-12 justify-between">
            <div className="card flex flex-col align-middle bg-green-200 p-4 shadow-lg rounded-lg">
              <p className="text-4xl font-semibold text-green-600">01</p>
              <p className="mt-4">
                Winner at lorem ipsum competiton in lorem ipsum college in 2025
              </p>
            </div>
            <div className="card flex flex-col align-middle bg-green-200 p-4 shadow-lg rounded-lg">
              <p className="text-4xl font-semibold text-green-600">01</p>
              <p className="mt-4">
                Winner at lorem ipsum competiton in lorem ipsum college in 2025
              </p>
            </div>
            <div className="card flex flex-col align-middle bg-green-200 p-4 shadow-lg rounded-lg">
              <p className="text-4xl font-semibold text-green-600">01</p>
              <p className="mt-4">
                Winner at lorem ipsum competiton in lorem ipsum college in 2025
              </p>
            </div>
          </div>
        </section>
        {/* <section className="our-achievements mx-16 mt-12 mb-16">
         
        <div>
          <Faq/>
        </div>
        </section> */}
        <section className="bg-green-800 py-12 px-16">
          <h1 className="text-green-50 font-bold text-4xl mb-2 text-center">
            Join our monthly newsletter!
          </h1>
          <p className="text-center text-green-200 opacity-60 text-sm">
            so that you don't miss any updates
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="block text-sm mx-auto mt-12 px-4 py-2 w-1/3 rounded-full focus:ring-1 focus:ring-white focus: ring-offset-2 outline-none transition-all duration-300"
          />
          <button className="block mx-auto text-green-800 bg-green-100 px-6 py-2 mt-6 rounded-full font-semibold">
            Submit
          </button>
        </section>
      </body>
    </div>
  );
};

export default App;
