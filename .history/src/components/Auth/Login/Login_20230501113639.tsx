import React, { useState } from "react";
import { RiEyeLine, RiEyeOffFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { LoginDto } from "../../../@types";

// import { toast, ToastContainer } from 'react-toastify';
import styles from "./login.module.scss";
import { setCredentials } from "../../../features/auth/authSlice";
import { useLoginMutation } from "../../../app/services";
import { useAppDispatch } from "../../../app/store";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState<LoginDto>({
    username: "",
    password: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(formData).unwrap();
      console.log("User", response)
      const { data , status } = response;
      if (status && data) {
        console.log("role")
        if(data.role !== "user"){
          toast.error("Not authorized for users")
          return
        }
        dispatch(setCredentials({ data }));
        toast.success("You have logged in successfully");
        navigate("/dashboard", { replace: true });
        // setTimeout(() => {
        // }, 200);
      }
    } catch (error) {
      // @ts-ignore
      const { data } = error;
      console.log("Error occured", data.message);
      error && toast.error(`${data.message}`);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, username: value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
    const value = e.target.value;
    if (value.length > 8) {
      setPasswordErrorMessage("Password shouldbe minimum of 8 characters");
    }
  };

  return (
    <>
      <form className={styles.login_form} onSubmit={onSubmitHandler}>
        <h2>iGammer Dashboard</h2>
        <p>Welcome back !!!</p>
        {/* <h2>SIGN IN</h2> */}
        <div className={styles.input_group}>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            id="email"
            required
            // aria-invalid
            placeholder="Enter your username"
            onChange={handleEmailChange}
            value={formData.username}
            autoFocus
            autoComplete="off"
          />
          {/* {emailErrorMessage ? (
            <p className={styles.error_message}>{emailErrorMessage}</p>
          ) : null} */}
        </div>
        <div className={styles.input_group}>
          <label htmlFor="password">Password</label>
          <p>Forgot password?</p>
          {togglePassword ? (
            <RiEyeOffFill
              className={styles.password_visible_icon}
              onClick={() => setTogglePassword(false)}
            />
          ) : (
            <RiEyeLine
              className={styles.password_visible_icon}
              onClick={() => setTogglePassword(true)}
            />
          )}
          <input
            type={togglePassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            value={formData.password}
            required
          />
          {/* {formData.password ? (
            <p className={styles.error_message}>{passwordErrorMessage}</p>
          ) : null} */}
        </div>
        <button type="submit" className={styles.submit_button}>
          Login
          {/* <ArrowRightIcon className={styles.icon} /> */}
        </button>
      </form>
      {/* <ToastContainer/> */}
    </>
  );
};

export default Login;
