import React, { useState } from "react";

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
    const api = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        message,
      }),
    });

    const response = await api.json();
    if(response.status === 200){
      window.alert("Message sended sucessfully...")
    }
    else if(response.status === 201){
      window.alert("user are found")
    }
    else{
      window.alert("please login before sending any message")
    }
  };
  return (
    <>
      {/* main container */}
      <div className="w-screen bg-gray-700 h-screen grid place-content-center">
        <h1 className="text-white text-center ml-8 py-10 lg:text-2xl overflow-hidden -mt-40">
          Ready to Get Started? Contact Us Now!
        </h1>
        <form className="md:w-[26rem] h-30 border-2 p-10 bg-black border-black-500 transition-all duration-500 rounded-2xl shadow-red-500/50 -mt-20 ml-10" method='POST' action='/contact'>
          <input
            name="username"
            value={data.username}
            type="text"
            placeholder="First Name"
            className="w-52 lg:w-80 ml-2 font-sans hover:translate-y-1 border-none transition-all  text-black border-3 rounded-lg my-1"
            onChange={HandleOnChange}
          />
          <input
            name="email"
            value={data.email}
            type="email"
            placeholder="Email..."
            className="w-52 ml-2 lg:w-80 font-sans hover:translate-y-1 border-none transition-all text-black border-3 rounded-lg my-1"
            onChange={HandleOnChange}
          />
          <textarea
            name="message"
            value={data.message}
            id=""
            className=" w-48 ml-2 lg:w-80 font-sans hover:translate-y-1 border-none transition-all text-black border-2 rounded-lg my-1 h-24"
            onChange={HandleOnChange}
            placeholder="Messages..."
          ></textarea>
          {/* on submit button */}
          <div className="w-screen m-auto my-5">
            <button
              className="w-24 h-10 mx-28 text-xl border-3 border-black rounded-lg bg-blue-600 hover:bg-blue-300 transition-all"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
