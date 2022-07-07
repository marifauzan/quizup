import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../parts/Sidebar";
import { selectUser } from "../../slice/user-slice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../slice/user-slice";

declare global {
  interface Window {
    alertComponent: () => {
      openAlertBox: boolean;
      alertBackgroundColor: string;
      alertMessage: string;
      showAlert(): void;
      successIcon: string;
      defaultSuccessMessage: string;
    };
  }
}

function User(): JSX.Element {
  const dispatch = useDispatch();
  const nowuser = useSelector(selectUser);
  const [password, setPassword] = useState<String>("");
  const [name, setName] = useState<String>("");

  const handleLogout = () => {
    dispatch(setUser(null));
    window.location.href = "/";
  };

  const handleUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .put(`https://616981a909e030001712c409.mockapi.io/users/${nowuser.id}`, {
        full_name: name,
        password: password,
      })
      .then((response) => {
        dispatch(setUser(response.data));
        if (
          window.confirm(
            "Are you sure want to change your username and password?"
          )
        ) {
          window.alert("Username and password changed.");
        }

        const resetForm = document.getElementById(
          "edituser-form"
        ) as HTMLFormElement;
        if (resetForm) resetForm.reset();
      });
  };

  const deleteUser = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (window.confirm("Are you sure want to delete this account?")) {
      handleLogout();
      axios.delete(
        `https://616981a909e030001712c409.mockapi.io/users/${nowuser.id}`
      );
    }
  };

  window.alertComponent = function () {
    return {
      openAlertBox: false,
      alertBackgroundColor: "",
      alertMessage: "",
      showAlert() {
        this.openAlertBox = true;
        this.alertBackgroundColor = "bg-green-500";
        this.alertMessage = `${this.successIcon} ${this.defaultSuccessMessage}`;
        this.openAlertBox = true;
      },
      successIcon: `<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2 text-white"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
      defaultSuccessMessage: `This alert contains success message.`,
    };
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="pl-28 grid grid-cols-1 grid-flow-row gap-3 ">
        <div className="flex mt-24 ml-24">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3940/3940403.png"
            alt="avatar"
            className="w-44 h-44"
          ></img>
          <div className="m-8">
            <h1 className="text-3xl font-semibold">{nowuser.full_name}</h1>
            <p className="">@{nowuser.username}</p>
            <button className=" rounded rounded-xl border border-gray-300 mr-4 px-9 py-2 text-sm text-gray">
              Active
            </button>
            <button
              onClick={deleteUser}
              className=" mt-10 rounded rounded-xl bg-rose-500 px-9 py-2 text-sm text-white"
            >
              Delete this user
            </button>
          </div>
        </div>

        <div className="ml-24">
          <form onSubmit={handleUser} className="px-5 py-6" id="edituser-form">
            <div className="mb-4">
              <label className="input-group">
                <span className="label-text w-32">Name</span>
                <input
                  onChange={(e) =>
                    e.target.value !== ""
                      ? setName(e.target.value)
                      : setName(nowuser.full_name)
                  }
                  className="input input-bordered w-96"
                  id="inline-full-name"
                  placeholder={nowuser.full_name}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="input-group">
                <span className="label-text w-32">New Password</span>
                <input
                  onChange={(e) =>
                    e.target.value
                      ? setPassword(e.target.value)
                      : setPassword(nowuser.password)
                  }
                  className="input input-bordered w-96"
                  type="password"
                  id="inline-password"
                  placeholder="Strong password"
                  required
                />
              </label>
            </div>
            <div className="mb-8">
              <button
                type="submit"
                className="block w-1/4 bg-blue-500 py-2 px-5 rounded-xl text-white text-sm font-semibold mt-6 hover:bg-blue-600 "
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
