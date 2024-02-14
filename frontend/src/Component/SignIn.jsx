import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
function SignIn() {
  const history = useHistory();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  }); 

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  } 
  const submit = async (event) => { 
    event.preventDefault();
    const { username, email, password } = input;
    const res = await fetch("/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, email, password
      })
    }); 

    const value = res.json();

    if (res.status === 422  || !value) {
      window.alert("Invalid credentials");
      console.log("Invalid credentials")
    } else {
      window.alert(" Successfully SignedIn");
      console.log("success");
      history.push("/");
    }

  }
  return (
    <div className="w-screen bg-gray-700 h-screen grid place-content-center ">
      <form className="md:w-92 md:my-20 border-2 p-10 bg-black border-black-500 transition-all duration-500 rounded-3xl shadow-red-500/50" method='Post' action='/signIn'>
        <div className='text-center text-gray-200 flex flex-col'>
          <label forHtml="name-1">Welcome Back !!!</label>

          <input type="text" value={input.username} name="username" placeholder='Enter Your Username' onChange={handleInput} className="md:w-60 md:my-2 my-1 rounded-lg hover:border-2 hover:shadow-md hover:shadow-black" />
 
          <input type="email" value={input.email} name="email" placeholder='Enter your email ' onChange={handleInput} className="md:w-60 md:my-2 my-1 rounded-lg hover:border-2 text-black hover:shadow-md hover:shadow-black" />

          <input type="password" value={input.password} name="password" placeholder='Enter your password' onChange={handleInput} className="md:w-60 md:my-2 my-1 rounded-lg text-black hover:border-2 hover:shadow-md hover:shadow-black" />
           
          <h1 className='font-sans-serif'>Not Registerd Go To: <Link to="/signUp" className='text-red-600'>SignUp</Link></h1>
        </div> 
        
          <div className="my-3">
            <button onClick={submit} className="w-20 text-gray-300 bg-red-800 hover:bg-red-300 hover:text-black hover:scale-100 p-2 rounded-lg mx-[5rem]">Submit</button>
          
        </div>
      </form>

    </div>
  );
};

export default SignIn