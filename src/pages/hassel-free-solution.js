import React from "react";
import { Images } from "../assets";
const cards = [
  {
    id: 1,
    image: Images.requestConsultation,
    title: "Request",
    description:
      "No need to create an account. just verify your contact number for a genuine booking.",
    },
    
  {
    id: 2,
    image: Images.makeAppointmentlogo,
    title: "Make Appointment",
    description:
    "Just give the patient's info for a checkup and you are done you have to just come to the clinic at your booking time.",
  },
  {
    id: 3,
    image: Images.solutions,
    title: " Get Solutions ",
    description:
      "Get the best solution for your problem we help you at every stage of your doubt.",
  },
];
const Solutions = () => {
  return (
    <div id="solutions" className=" py-12 flex justify-center items-center  ">
      <div className=" w-full flex justify-center items-center flex-col ">
        <p className="font-semibold md:text-3xl text-xl text-gray-50 capitalize">
          Hassel free Solution
        </p>
        <h2 className="  md:text-5xl text-2xl font-bold capitalize">
          Easy steps for your go
        </h2>
        <div className="m-8 flex flex-col md:flex-row md:space-x-8 space-y-5 md:space-y-0">
          {cards.map((data) => (
            <div
              key={data.id}
              className="flex flex-col  items-center space-y-4 text-center shadow-xl  bg-white rounded-2xl md:py-10 py-6 px-4 md:px-8  md:w-96"
            >
              <img src={data.image} className="md:w-20 w-12" alt={data.title} />
              <p className="md:text-2xl text-xs font-bold capitalize">{data.title}</p>
              <p className="md:text-sm text-xs">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
