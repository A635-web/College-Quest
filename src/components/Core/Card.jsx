
import React from 'react';
import { Fragment } from "react";
import CTAButton from "./Button"
import { Checkbox } from "@material-tailwind/react";
const CreditCard = ({subsection,comitee,name,Cordinator}) => {
  return (
    <div>

<div className="w-500 h-500 rounded-lg shadow-md overflow-hidden">
       <div className='flex flex-row gap-7 mt-8 justify-center'>
            <CTAButton active={subsection.active} linkto={subsection.linkto}> 
            
                    {subsection.btnText}
                    {/* <FaArrowRight/> */}
               
                </CTAButton>
            
      </div>
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <p className="text-gray-500">{comitee}:</p>
          <p className="text-gray-700">{name}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-500">Co-ordinator:</p>
          <p className="text-gray-700">{Cordinator}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-500">Recruitment Process:</p>
          <Fragment>
      <Checkbox id="ripple-on" label="going on" ripple={true} />

    </Fragment>
         
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">copyright:</p>
          <p className="text-gray-700">123</p>
        </div>
      </div>
    </div>




    </div>
  
  );
};

export default CreditCard;
