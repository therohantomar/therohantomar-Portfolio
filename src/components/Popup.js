import React, { useRef } from "react";
import { useFormik } from "formik";
import { useContext } from "react";
import { popupContext } from "../App";
import emailjs from "@emailjs/browser";
import { validationSchema } from "../utils/ValidationSchema";
import useHandleOutsideClick from "../utils/hooks/useHandleOutsideClick";
import { AiOutlineMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
const Popup = () => {
  const setPopup = useContext(popupContext);
  const formRef = useRef();
  useHandleOutsideClick(formRef, setPopup);

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      emailjs
        .send(
          process.env.REACT_APP_SERVICEID,
          process.env.REACT_APP_TEMPLATEID,
          values,
          process.env.REACT_APP_PUBLICKEY
        )
        .then((result) => {
          if (result.text === "OK") {
            setPopup(false);
            alert("Thank you for your response :)", result);
          }
        })
        .catch((err) => {
          alert("some error found!!");
          setPopup(false);
        });
    },
  });

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } =
    formik;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={formRef} className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Popup Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`border ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded px-3 py-2 w-full`}
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && touched.name && (
              <div className="text-red-500 mt-1">{errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block font-bold mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className={`border ${
                errors.phoneNumber && touched.phoneNumber
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded px-3 py-2 w-full`}
              onChange={handleChange}
              value={values.phoneNumber}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <div className="text-red-500 mt-1">{errors.phoneNumber}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`border ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded px-3 py-2 w-full`}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div className="text-red-500 mt-1">{errors.email}</div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>

        <span className="flex gap-4 items-center">
          <h1>or</h1>
          <a href="mailto:therohantomar@gmail.com">
            <AiOutlineMail />
          </a>
          <a href="tel:8291774460">
            <IoCall />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Popup;
