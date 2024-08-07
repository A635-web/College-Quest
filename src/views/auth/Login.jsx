import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyIcon, UserIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";

import CustomValidationErrorMessage from "../../components/errors/CustomValidationErrorMessage";
import Loader from "../../components/loader/index";
import AuthLayout from "../layout/AuthLayout";
import AppLogo from "../../components/images/AppLogo";
import image from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";

const loginValidation = Yup.object({
  username: Yup.string().required("This field is Required"),
  password: Yup.string()
    .required("Password field is required")
    .min(8, "The Password lenght should be atleast 8 characters"),
});

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appInApp = useSelector((state) => state.appInApp.appInApp);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (values, resetForm) => {
    setLoading(true);
    try {
      if (/^(\d+-)*(\d+)$/.test(values.username)) {
        values.phoneNumber = values.username;
        delete values.username;
      } else {
        values.email = values.username;
        delete values.username;
      }
      // console.log(values);
      const res = await login(values);
      console.log(res);

      // console.log(response);
      //   if (status >= 200 && status < 300) {
      //     delete response?.data?.user?.encrypted_password;
      //     dispatch(setUser(response?.data?.user));
      //     navigate("/dashboard");
      if (res.status === 200) toast.success(res.data.message);
      else toast.error(res.data.message);
      //   }
    } catch (err) {
      console.error("Error : ", err);
      toast.error(err?.response?.data?.error || "Something went Wrong");
    }
    setLoading(false);
    resetForm();
  };
  useEffect(
    function () {
      if (isAuthenticated) navigate("/dashboard", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <>
      <AuthLayout
        show={true}
        imageLink={image}
        title={"Sign In"}
        description={
          "Login and continue with your registered account to get access to premium content."
        }
        form={
          <div className="w-11/12 lg:w-10/12 xl:w-2/3 max-w-2xl flex flex-col items-center justify-center">
            <AppLogo
              width={"100px"}
              height={"100px"}
              classname={"mx-auto mb-4"}
            />
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={loginValidation}
              onSubmit={(values, { resetForm }) =>
                handleLogin(values, resetForm)
              }
            >
              {({ values, touched, errors, handleChange, handleSubmit }) => {
                return (
                  <>
                    <div className="w-11/12 ">
                      <div className="bg-gray-100 text-secondary flex gap-3 items-center px-3 rounded-lg my-5 shadow-lg">
                        <UserIcon className="w-5 h-5" />
                        <input
                          id="username"
                          placeholder="Email or Phone Number"
                          className="p-2.5 text-lg rounded-lg bg-gray-100 w-full focus:outline-none"
                          type="username"
                          value={values.username}
                          onChange={handleChange}
                        />
                      </div>
                      <CustomValidationErrorMessage
                        show={
                          touched.username && errors.username ? true : false
                        }
                        error={errors.username}
                      />
                      <div className="bg-gray-100 text-secondary flex gap-3 items-center px-3 rounded-lg my-5 shadow-lg">
                        <KeyIcon className="w-5 h-5" />
                        <input
                          id="password"
                          placeholder="Password"
                          className="p-2.5 text-lg rounded-lg bg-gray-100 w-full focus:outline-none"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                        />
                      </div>
                      <CustomValidationErrorMessage
                        show={
                          touched.password && errors.password ? true : false
                        }
                        error={errors.password}
                      />

                      <button
                        className="p-2.5 text-lg rounded-lg bg-secondary text-white w-full my-3 shadow-lg"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading ? true : false}
                      >
                        {loading ? (
                          <Loader width={25} height={25} />
                        ) : (
                          "Sign In"
                        )}
                      </button>
                      <div className="text-sm w-full text-right my-1 px-3">
                        <Link to={"/forgot-password"}>Forgot Password ?</Link>
                      </div>
                      {/* <div className="flex items-center gap-2 mt-4 mb-2 w-11/12 ">
                      <div className="bg-secondary h-0.5 w-full"></div>
                      <h1 className="text-sm text-secondary">or</h1>
                      <div className="bg-secondary h-0.5 w-full"></div>
                    </div>
                    <div className="flex justify-around w-11/12  mb-2">
                      <button className="rounded-lg w-32 p-1 border-2 border-secondary">
                        Google
                      </button>
                      <button className="rounded-lg w-32 p-1 border-2 border-secondary">
                        Facebook
                      </button>
                    </div> */}
                      <div className="text-sm my-3 text-center">
                        Don't have and account ?{" "}
                        <Link
                          to={"/signup"}
                          className="text-primary font-semibold"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </>
                );
              }}
            </Formik>
          </div>
        }
      />
    </>
  );
};

export default Login;
