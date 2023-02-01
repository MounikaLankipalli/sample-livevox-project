import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function isValidEmail(email) {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(String(email).toLowerCase());
}

function isValidPassword(password) {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return pattern.test(password);
}

function ScreenOneContainer(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [enableSubmitButton, setEnableSubmitButton] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmailValid) {
      if (isValidEmail(formData.email)) {
        setIsEmailValid(true);
      }
    }

    if (!isPasswordValid) {
      if (isValidPassword(formData.password)) {
        console.log("formData.password", formData.password);
        setIsPasswordValid(true);
        console.log("PASSWORD VAILD");
      }
    }

    if (isEmailValid && isPasswordValid) {
      setEnableSubmitButton(true);
    } else {
      setEnableSubmitButton(false);
    }
  }, [formData, isEmailValid, isPasswordValid, enableSubmitButton]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_DATA", formData });
    console.log(formData);
    props.navigateTo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" disabled={false}>
        Submit
      </button>
    </form>
  );
}

export default ScreenOneContainer;
