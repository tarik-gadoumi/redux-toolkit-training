import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  update,
  remove,
  addHello,
  updateUser2,
  deletUser2,
} from "../../redux/userSlice";
import { updateUser } from "../../redux/ApiCalls";
export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleUpdate = async (e) => {
    e.preventDefault();
    // dispatch(addHello({ name, email }));
    // updateUser({ name, email }, dispatch);
    dispatch(updateUser2({ name, email }));
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    // dispatch(remove());
    dispatch(deletUser2({ name, email }));
  };
  // basically when i click on the Update button we will send these informations to our reducer
  // & they (name & email) will  be basically  our action payload
  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>
          Delete Account
        </button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              disabled={pending}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
            {error && <span className="error"> Somthing went wrong !</span>}
            {pending === false && (
              <span className="success">Changes where made</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
