import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const history = useHistory()
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    address: ""
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submit = async (event) => {
    event.preventDefault();
    const { username, email, password, address } = input;
    const res = await fetch("https://adarsh-54q0.onrender.com/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, email, password, address
      })
    })

    const value = await res.json();

    if (res.status === 400 || !value) {
      // toast("Invalid credentials...", {
      //   type: "danger",
      //   position: "top-center",
      //   autoClose: 3000,

      // });
      window.alert("Invalid credentials...")
    }
    else if (res.status === 422) {
      // toast("Fill All Information", {
      //   type: "warning",
      //   position: "top-center",
      //   autoClose: 3000,

      // });
      window.alert("Fill All Information")
    }
    else {
      // toast("Registration completed , you are redirecting to login Page", {
      //   type: "sucess",
      //   position: "top-center",
      //   autoClose: 3000,
      // });
      window.alert("Registration completed , you are redirecting to login Page")
      history.push("/signIn");
    }



  }

  return (
    <div className="bg-gray-800 h-fit grid place-content-center">
      <form className="w-fit md:w-fit md:my-20 mt-8 mb-6 border-2 p-10 bg-black border-black-500   rounded-3xl shadow-2xl shadow-black " method='Post' action='/signUp'>
        <div className='text-center text-gray-200 flex flex-col'>
          <label >Register Your Self  !!!</label>

          <input type="text" value={input.username} name="username" placeholder='Enter Your Username' onChange={handleInput} className="w-fill md:w-80 text-gray-600 MY-2 rounded-lg  " />

          <input type="email" value={input.email} name="email" placeholder='Enter your email ' onChange={handleInput} className="md:w-80 text-gray-600 md:my-2 my-1 rounded-lg  " />

          <input type="password" value={input.password} name="password" placeholder='Enter your password' onChange={handleInput} className="md:w-80 text-gray-600 md:my-2 my-1 rounded-lg    " />

          <textarea name="address" value={input.address} id="" cols="24" rows="4" onChange={handleInput} placeholder='Enter Your Address' className='md:w-80 text-gray-600 md:my-2 my-1 rounded-lg  '></textarea>
        </div>
        <div className="">
          <div className="my-3">
            <button onClick={submit} className="w-20 md:w-28 text-gray-300 bg-red-800 hover:bg-red-300 hover:text-black hover:scale-100 p-2 rounded-lg mx-[6.3rem] sm-mx[8rem]">Submit</button>
            <ToastContainer />
          </div>
        </div>
      </form>

    </div>
  );
};

export default SignUp
