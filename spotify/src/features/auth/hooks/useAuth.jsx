import { useSelector } from "react-redux";
import { dispatch } from "../../../app/store/store";
import { registerUser, loginUser } from "../state/authSlice";
import { useNavigate } from "react-router";
import { storage } from "../../../utils/localStorage";
import { useRHF } from "../../../shared/hooks/useRHF";
import { nanoid } from "@reduxjs/toolkit";
export let useAuth = () => {
  let navigate = useNavigate();
  let { isAuthenticated, users } = useSelector((store) => store.auth);
  let { reset } = useRHF();

  const handleLoginSubmit = (data) => {
  const storedUsers = storage.get("users") || [];

  const allUsers = users.length ? users : storedUsers; //agar redux me data hai toh waha se lelo ya fir storedUser se lelo

    const foundUser = allUsers.find(
      (elem) => elem.email === data.email && elem.password === data.password,
    );
    if (foundUser) {
      dispatch(loginUser(foundUser));
      storage.set("loggedInUser", foundUser);
      navigate("/");
      reset();
    } else {
      alert("Invalid email or password");
    }
  };

  const handleRegisterSubmit = (data) => {
    const exists = users.find((elem) => elem.email === data.email);
    if (exists) {
      alert("User already exists!");
      return;
    }
    let newUser =  {...data , id:nanoid()}
    dispatch(registerUser(newUser));
    const updatedUser = [...users , newUser]
    alert("Registration successful!");
    storage.set("users", updatedUser);
    navigate("/");
  };

  return {
    handleLoginSubmit,
    navigate,
    isAuthenticated,
    handleRegisterSubmit,
  };
};
