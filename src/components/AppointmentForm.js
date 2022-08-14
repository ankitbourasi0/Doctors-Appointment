import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

import { Button, notification, Space,DatePicker} from 'antd';
const AppointmentForm = () => {

 
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  // Error handling using yup -----------------------------------
  const errors = yup.object({
    firstName: yup
      .string()
      .max(15, " First name characters should be less then 15  ")
      .required("First name is required *")
      .min(3, " Last name characters should be greater then 3"),
    lastName: yup
      .string()
      .max(15, " Last name characters should be less then 15  ")
      .required("Last name is required *")
      .min(3, " Last name characters should be greater then 3"),
    city: yup.string().required("City is required *"),
    age: yup.string().required("Age required *"),
    mobile: yup.string().required("Phone no. is required *"),
  });

  //Formik ------------------------------------------------------
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "male",
      city: "",
      mobile: "",
      appointmentDate: new Date(),
    },
    validationSchema: errors,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const openNotificationWithIcon = (type,e) => {
  
    notification[type]({
      message: '',
       });
  };
  return (
    <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm  p-8 shadow-lg rounded-lg md:w-auto sm:px-10 ">
      <form className="mb-0 space-y-2 md:space-y-6" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col  md:flex-row md:space-x-4">
          {/* First Name Section ---------------------------------------------- */}

          <div className=" ">
            <label
              className="block text-md font-semibold text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <div className="">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className=" bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1  focus:ring-indigo-500"
                onChange={formik.handleChange}
                
              />
            </div>
           
          </div>
          {/* Last Name Section ---------------------------------------------- */}

          <div>
            <label
              className="block text-md font-semibold text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <div className="">
              <input
                id="lastName"
                name="lastName"
                type="text"
                className=" bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1  focus:ring-indigo-500"
                onChange={
                  ()=>{
                    openNotificationWithIcon("error",
                    formik.handleChange
                    )

                  }
                  }
              
              />
              
            </div>
          </div>
        </div>

        {/* Gender Section ---------------------------------------------- */}
        <div className="">
          <label className="block text-md font-semibold text-gray-700" htmlFor="">
            Gender
          </label>
          <div className="flex space-x-6 mt-1">
            <div className="flex items-center">
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                className="h-4 w-4 border-gray-300 "
              />
              <label
                htmlFor="male"
                className="text-sm font-semibold text-gray-700 ml-1 block"
              >
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="female"
                type="radio"
                name="gender"
                value="Female"
                className="h-4 w-4 border-gray-300 "
              />
              <label
                htmlFor="female"
                className="text-sm font-semibold text-gray-700 ml-1 block"
              >
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="anyOther"
                type="radio"
                name="gender"
                value="Any other"
                className="h-4 w-4 border-gray-300 "
              />
              <label
                htmlFor="anyOther"
                className="text-sm font-semibold text-gray-700 ml-1 block"
              >
                Any other
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row md:space-x-4">
          {/* Age Section ---------------------------------------------- */}
          <div>
            <label
              className="block text-md font-semibold text-gray-700"
              htmlFor="age"
            >
              Age
            </label>
            <div className="my-1">
              <input
                id="age"
                name="age"
                type="text"
                className=" bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1  focus:ring-indigo-500"
                onChange={formik.handleChange}
               
              />
              
            </div>
          </div>
          {/* Phone Section ---------------------------------------------- */}
          <div>
            <label
              className="block text-md font-semibold text-gray-700"
              htmlFor="mobile"
            >
              Phone
            </label>
            <div className="my-1">
              <input
                id="mobile"
                name="mobile"
                type="text"
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1  focus:ring-indigo-500"
                onChange={formik.handleChange}
               
              />

            </div>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row md:space-x-4">
          {/* City Section ---------------------------------------------- */}
          <div>
            <label
              className="block text-md font-semibold text-gray-700"
              htmlFor="city"
            >
              City
            </label>
            <div className="my-1">
              <input
                id="city"
                name="city"
                type="text"
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1  focus:ring-indigo-500"
                onChange={formik.handleChange}

              />
              <p className="my-1 text-sm text-red-600">
                {formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : null}
              </p>
            </div>
          </div>
          <div >
            <label
              className="block text-md font-semibold text-gray-700"
              htmlFor="date"
            >
              Appointment Date
            </label>
            <div className="my-1">
              <DatePicker
                onChange={onChange}
                placeholder=""
                style={{
                  width: "100%",
                  border:"1px solid rgb(209 213 219)",
      
                  borderRadius: "10px",
                  padding: "8px 12px",
                  
                  
                }}
              />
            </div>
          </div>
        </div>


        {/* Submit Button ---------------------------------------------- */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 flex justify-center border border-transparent bg-indigo-600 text-white rounded-md shadow-sm text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
