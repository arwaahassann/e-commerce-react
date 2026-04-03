import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),

    email: Yup.string()
      .required("Email address is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must be a valid format"),

    username: Yup.string()
      .required("Username is required")
      .matches(/^\S*$/, "Username must not contain spaces"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const onSubmit = (values) => {
    console.log(values);
    navigate("/products");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
      <h2 className="text-2xl font-black mb-6 text-gray-800">Register</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              type="text"
              className="border rounded-xl p-2 outline-none focus:border-black"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className="border rounded-xl p-2 outline-none focus:border-black"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username">User Name</label>
            <Field
              id="username"
              name="username"
              type="text"
              className="border rounded-xl p-2 outline-none focus:border-black"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className="border rounded-xl p-2 outline-none focus:border-black"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="border rounded-xl p-2 outline-none focus:border-black"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-[#28a745] text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all mt-4"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterPage;
