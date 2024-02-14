import React, { useState } from "react";
import { Scrollbar } from 'react-scrollbars-custom';
function Review() {
  const [data, setData] = useState({
    username: "",
    comment: "",
  });

  const [text, setText] = useState([]);
  const HandelOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const newValue = { ...data, id: new Date().toLocaleTimeString() };
    setText([...text, newValue]);
    const { username, comment } = data;

    const res = await fetch("/review", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        comment,
      }),
    });

    const value = await res.json();

    if (res.status == 400 || !value) {
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    } else {
      window.alert(" Successfully Sended");
    }

  };

  const [showBox] = useState(false)
  return (
    <>
      <div className="bg-gray-700">
        <h1 className="text-2xl py-4 md:text-xl mx-2  py-4 bg-gray-600 text-cyan-300 rounded-lg font-bold text-center">You Can Comment Here....</h1>
        {/* main  */}
        <form className="bg-gray-800" method="post" action="/review">
          {/* Name */}
          <div className="flex flex-col  items-center">
            <input
              type="text"
              name="username"
              value={data.username}
              id=""
              className="w-40 md:w-60 h-8 sm:h-10 mt-12 my-1 border-2 border-black rounded-lg text-black"
              placeholder="Enter Your Name"
              autoFocus=""
              onChange={HandelOnChange}
            />
            {/* commrent */}
            <textarea
              name="comment"
              id=""
              value={data.comment}
              className="w-40 md:w-60 h-10 md:h-12 border-2 border-black rounded-lg text-black"
              placeholder="Comment here........."
              onChange={HandelOnChange}
            />
            <button
              onClick={submit}
              className="w-16 h-6 md:w-20 md:h-10 border-2 border-black rounded-lg text-sm md:text-[1rem] text-white m-2  bg-red-800 hover:bg-red-300 "
            >
              Submit
            </button>
          </div>
        </form>
        {
          text.length == 0 ? showBox : (
            <Scrollbar className="w-2/3 h-52 m-auto overflow-auto bg-gray-800 border-none scroll-smooth transition-all">
              {
                text.map((element) => {
                  const { username, comment } = element;
                  return (
                    <>
                      <div className="m-auto scroll-auto bg-gray-300 border-[.1rem] border-black shadow-sm shadow-black m-2 p-2 rounded-lg">
                        <h1 className="text-black">{username}</h1>
                        <h1 className="text-black">{comment}</h1>
                      </div>
                    </>
                  );
                })}
            </Scrollbar>
          )
        }
      </div>
    </>
  );
}

export default Review;
