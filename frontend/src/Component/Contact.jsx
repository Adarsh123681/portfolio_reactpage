import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [text, setText] = useState([]);
  const HandleOnChange = async (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value })
  };
  const submit = async (e) => {
    e.preventDefault();
    let newData = { ...data, id: new Date().getTime().toString() };
    setText([...text, newData]);
    const {
      username,
      message,
      email
    } = data;
    const api = await fetch("https://adarsh-54q0.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, email, message, }),
    });

    const response = await api.json();
    if (api.status === 401 || !response) {
      toast("Invalid credentials...", {
        type: "danger",
        position: "top-center",
        autoClose: 3000,

      });
    }
    else if (api.status === 422) {
      // window.alert("Please fill all information");
      toast("Please fill all information...", {
        type: "warning",
        position: "top-center",
        autoClose: 5000,
      });
    }
    else {
      toast("Messae sendded successfully...", {
        type: "success",
        position: "top-center",
        autoClose: 5000,
      });

    }
    setData(" ")
  };
  return (
    <>
      {/* main container */}
      <div className="bg-gray-800 h-screen grid place-content-center">
        <form className="w-96  mb-6 md:my-12 border-2 p-10 bg-black border-black-500 transition-all  rounded-md shadow-2xl shadow-black mt-4" method='POST' action='/contact'>
          <h1 className="text-white text-center">
            Ready to Get Started? Contact Us Now!
          </h1>
          <input
            name="username"
            value={data.username}
            type="text"
            placeholder="First Name"
            className=" lg:w-60 ml-2 font-sans hover:translate-y-1 border-none transition-all  text-black border-3 rounded-lg my-1"
            onChange={HandleOnChange}
          />
          <input
            name="email"
            value={data.email}
            type="email"
            placeholder="Email..."
            className=" ml-2 lg:w-60 font-sans hover:translate-y-1 border-none transition-all text-black border-3 rounded-lg my-1"
            onChange={HandleOnChange}
          />
          <textarea
            name="message"
            value={data.message}
            id=""
            className=" ml-2 lg:w-60 font-sans hover:translate-y-1 border-none transition-all text-black border-2 rounded-lg my-1 h-24"
            onChange={HandleOnChange}
            placeholder="Messages..."
          ></textarea>
          {/* on submit button */}
          <div className="m-auto my-5">
            <button
              className="w-24 h-10 mx-20 text-xl border-3 border-black rounded-lg bg-blue-600 hover:bg-blue-300 transition-all text-white"
              onClick={submit}
            >
              Submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
