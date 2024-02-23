import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    username: "",
    userLname: "",
    email: "",
    number: "",
    message: "",
  });

  const [text, setText] = useState([]);
  const HandleOnChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    let newData = { ...data, id: new Date().getTime().toString() };
    setText([...text, newData]);
    setData({
      username: " ",
      userLname: " ",
      number: " ",
      email: " ",
      message: " ",
    });
    console.log(setText);

    //Backened
    const {
      username,
      userLname,
      email,
      number,
      message,
    } = data;
    const api = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        userLname,
        email,
        number,
        message,
      }),
    });

    const response = await api.json();
    if (response.status === 400) {
      window.alert("Please fill All details properly");
    } else {
      window.alert("Data sended succesfully");
    }
  };
  return (
    <>
      {/* main container */}
      <div className="w-screen bg-gray-700 h-screen grid place-content-center">
        <h1 className="text-white text-center py-10 lg:text-2xl overflow-hidden -mt-40">
        Ready to Get Started? Contact Us Now!
        </h1>
        <form className="md:w-[26rem] h-30 border-2 p-10 bg-black border-black-500 transition-all duration-500 rounded-2xl shadow-red-500/50 -mt-20 ml-10"method='Post' action='/contact'>
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
          <input
            name="number"
            value={data.number}
            type="number"
            placeholder="Number"
            className="w-52 ml-2 lg:w-80 font-sans hover:translate-y-1 border-none transition-all text-black border-3  rounded-lg my-1"
            onChange={HandleOnChange}
          />
          <textarea
            name="message"
            value={data.message}
            id=""
            className=" w-52 ml-2 lg:w-80 font-sans hover:translate-y-1 border-none transition-all text-black border-2 rounded-lg my-1"
            onChange={HandleOnChange}
            placeholder="Messages..."
          ></textarea>
          {/* on submit button */}
          <div className="w-screen m-auto my-5">
            <button
              type="Submit"
              className="w-24 h-8 mx-12 my-2 text-xl border-3 border-black rounded-lg bg-blue-600 hover:bg-blue-300 transition-all"
              onClick={submit}
            >
              Submit
            </button>

            <button
              type="Clear"
              className="w-24 h-8 text-xl border-3 border-black rounded-lg  bg-red-600 hover:bg-red-300 transition-all"
              onClick={() => {
                setData({
                  username: " ",
                  userLname: " ",
                  number: " ",
                  email: " ",
                  message: " ",
                });
              }}
            >
              Clear
            </button>
          </div>
        </form>
        {text.map((ele, index) => {
          return (
            <>
              <p className="w-screen text-xl m-auto" key={index}>
                {ele.username}
                {ele.email}
                {ele.message}
                {ele.number}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Contact;
