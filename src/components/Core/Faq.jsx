// import { useState } from "react";

// const Accordion = () => {
//   return (
//     <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
//               <span className="mb-2 block text-lg font-semibold text-indigo-600">
//                 FAQ
//               </span>
//               <h2 className="mb-4 text-3xl font-bold text-black sm:text-[40px]/[48px]">
//                 Any Questions? Look Here
//               </h2>
//               <p className="text-base text-body-color dark:text-dark-6">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
//                 eaque, quos, quas, quod.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 lg:w-1/2">
//             <AccordionItem
//               header="Can students join for free?"
//               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, quos, quas, quod. It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available"
//             />
//             <AccordionItem
//               header="Can students join for free?"
//               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, quos, quas, quod. It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available"
//             />
//             <AccordionItem
//               header="Can students join for free?"
//               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, quos, quas, quod. It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available"
//             />
//           </div>
//           <div className="w-full px-4 lg:w-1/2">
//             <AccordionItem
//               header="Can students join for free?"
//               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, quos, quas, quod. It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available"
//             />
//             <AccordionItem
//               header="Can students join for free?"
//               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, quos, quas, quod. It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available"
//             />
//             <AccordionItem
//               header="Can students join for free?"
//               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, quos, quas, quod. It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 right-0 z-[-1]">
//         <svg
//           width="1440"
//           height="886"
//           viewBox="0 0 1440 886"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             opacity="0.5"
//             d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
//             fill="url(#paint0_linear)"
//           />
//           <defs>
//             <linearGradient
//               id="paint0_linear"
//               x1="1308.65"
//               y1="1142.58"
//               x2="602.827"
//               y2="-418.681"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stop-color="#3056D3" stop-opacity="0.2" />
//               <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
//               <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.0" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Accordion;

// const AccordionItem = ({ header, text }) => {
//   const [active, setActive] = useState(false);

//   const handleToggle = () => {
//     // event.preventDefault();
//     setActive(!active);
//   };
//   return (
//     <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
//       <button
//         className={`faq-btn flex w-full text-left`}
//         onClick={() => handleToggle()}
//       >
//         <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
//           <svg
//             className={`fill-primary stroke-primary duration-200 ease-in-out ${
//               active ? "rotate-180" : ""
//             }`}
//             width="17"
//             height="10"
//             viewBox="0 0 17 10"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
//               fill=""
//               stroke=""
//             />
//           </svg>
//         </div>

//         <div className="w-full">
//           <h4 className="mt-1 text-lg font-semibold text-black">{header}</h4>
//         </div>
//       </button>

//       <div
//         className={`pl-[62px] duration-200 ease-in-out ${
//           active ? "block" : "hidden"
//         }`}
//       >
//         <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-richblack-5 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-indigo-600">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Find answers to the most common questions about joining our college clubs and societies.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Why should I join clubs and societies?"
              text="Joining clubs and societies in college provides an excellent opportunity to meet new people, develop new skills, and enhance your college experience. These organizations allow you to pursue your interests and passions outside the classroom, build a network of like-minded peers, and gain valuable experiences that can benefit your personal and professional life."
            />
            <AccordionItem
              header="What are the benefits of joining a club?"
              text="There are numerous benefits to joining a club, including personal growth, professional development, and social opportunities. Clubs can help you develop leadership skills, enhance your resume, and provide a platform to showcase your talents. Additionally, being part of a club can offer stress relief from academic pressures and make your college life more enjoyable."
            />
            <AccordionItem
              header="What skills can I learn in these clubs and societies?"
              text="Joining clubs and societies can help you develop a wide range of soft skills such as communication, teamwork, leadership, time management, and problem-solving. You may also acquire specific technical skills depending on the club's focus, such as programming, event planning, or public speaking. These skills are highly valued by employers and can give you a competitive edge in the job market."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Is the recruitment process filtered or open?"
              text="The recruitment process for clubs and societies can vary. Some clubs have an open membership policy, allowing any interested student to join. Others may have a more selective process, including interviews or auditions, to ensure that members are committed and have the necessary skills or interests. Be sure to check the specific requirements for each club you are interested in."
            />
            <AccordionItem
              header="What types of projects can I work on in these clubs?"
              text="Clubs and societies often work on a variety of projects that can range from community service initiatives and cultural events to technical challenges and competitions. For example, a robotics club might participate in building robots for competitions, while a cultural club might organize festivals and performances. These projects provide hands-on experience and an opportunity to apply what you've learned in real-world scenarios."
            />
            <AccordionItem
              header="What are achievements of these clubs and societies?"
              text="Many clubs and societies have notable achievements, such as winning competitions, hosting successful events, and making significant contributions to the community. These accomplishments not only bring recognition to the club but also offer members a sense of pride and achievement. Being part of a club with a strong track record can be a rewarding experience and add value to your personal and professional development."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.2" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
