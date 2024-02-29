import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

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
    console.log(value)
    if (res.status === 400 || !value) {
      window.alert("User already Exist");
    }
     else if (res.status === 422) {
      window.alert("Please fill all information");
    }
    else {
      window.alert("Successfully registerd");
      history.push("/signIn");
    }



  }

  return (
    <div className="bg-gray-800 h-screen grid place-content-center mt-[-5rem] overflow-x-hidden">
      <form className="md:w-92 md:my-20 border-2 p-10 bg-black border-black-500 transition-all duration-500 rounded-3xl shadow-2xl shadow-black ease-in" method='Post' action='/signUp'>
        <div className='text-center text-gray-200 flex flex-col'>
          <label forHtml="name-1">Register Your Self  !!!</label>

          <input type="text" value={input.username} name="username" placeholder='Enter Your Username' onChange={handleInput} className="md:w-80 text-gray-600 md:my-2 my-1 rounded-lg hover:border-2 hover:shadow-md hover:shadow-black" />

          <input type="email" value={input.email} name="email" placeholder='Enter your email ' onChange={handleInput} className="md:w-80 text-gray-600 md:my-2 my-1 rounded-lg hover:border-2 hover:shadow-md hover:shadow-black" />

          <input type="password" value={input.password} name="password" placeholder='Enter your password' onChange={handleInput} className="md:w-80 text-gray-600 md:my-2 my-1 rounded-lg hover:border-2 hover:shadow-md hover:shadow-black" />

          <textarea name="address" value={input.address} id="" cols="24" rows="4" onChange={handleInput} placeholder='Enter Your Address' className='md:w-80 text-gray-600 md:my-2 my-1 rounded-lg hover:border-2 hover:shadow-md hover:shadow-black'></textarea>
        </div>
        <div class="">
          <div class="my-3">
            <button onClick={submit} class="w-20 md:w-28 text-gray-300 bg-red-800 hover:bg-red-300 hover:text-black hover:scale-100 p-2 rounded-lg mx-[6.3rem] sm-mx[8rem]">Submit</button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default SignUp