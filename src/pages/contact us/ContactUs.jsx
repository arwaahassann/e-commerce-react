import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactUs() {
  const [showSuccess, setShowSuccess] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email address is required"),
    phone: Yup.string().nullable(),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message cannot exceed 500 characters"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    setShowSuccess(true);
    resetForm();
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-10 bg-white shadow-2xl rounded-3xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-2">Contact Us</h2>

      {showSuccess && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 font-bold text-center">
          Success! We will get to you soon.
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label>First Name</label>
            <Field
              name="firstName"
              className="border p-3 rounded-lg bg-gray-50 outline-none focus:border-black"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label>Last Name</label>
            <Field
              name="lastName"
              className="border p-3 rounded-lg bg-gray-50 outline-none focus:border-black"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label>Email</label>
            <Field
              name="email"
              type="email"
              className="border p-3 rounded-lg bg-gray-50 outline-none focus:border-black"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label>Phone Number</label>
            <Field
              name="phone"
              className="border p-3 rounded-lg bg-gray-50 outline-none focus:border-black"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label>Message</label>
            <Field
              name="message"
              as="textarea"
              rows="4"
              className="border p-3 rounded-lg bg-gray-50 outline-none focus:border-black"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-fit bg-black text-white px-10 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactUs;
