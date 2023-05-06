"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";


async function SubmitRegister(data){
    const namas = data.nama
    const email = data.email
    const password = data.password
    const ConfirmPassword = data.ConfirmPassword
    console.log(ConfirmPassword)
    try {
        const response = await axios(process.env.URL_HOST+"/register",{
            withCredentials:true,
            method : "POST",
            headers : {
                "Content-Type" : 'application/json'
            },
            data : {
                nama : namas,
                email : email,
                password : password,
                confirmPassword : ConfirmPassword
            }
        })
        if(response) console.log(response)
    } catch (error) {
        console.log({errorCuys : error})
    }
    

}
  
export default function Signup() {
    const [input, setInput] = useState({ });
    function onChange (e) {
      const target = e.target
      const value = target.value
      const name = target.name
      setInput({
          ...input,
          [name] : value
      })      
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        SubmitRegister(input)
    }

  return (
    <>
    <title>Sign up</title>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Sign up</h1>
              </div>
              <form method={'POST'} onSubmit={(e) => handleSubmit(e)} className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      required
                      id="nama"
                      name="nama"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address" 
                      onChange={onChange}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-2 peer-focus:left-0 -top-4.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 my-1"
                      placeholder="Email address"
                      onChange={(e) => onChange(e)}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-2 peer-focus:left-0  text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm mt-1"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      required
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 "
                      placeholder="Password"
                      onChange={(e) => onChange(e)}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-2 peer-focus:left-0 top-1 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      required
                      id="ConfirmPassword"
                      name="ConfirmPassword"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 "
                      placeholder="Password"
                      onChange={(e) => onChange(e)}
                    />
                    <label
                      htmlFor="ConfirmPassword"
                      className="absolute left-2 peer-focus:left-0 top-1 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="relative text-right">
                    <Link href={"/login"}>
                      <button className="bg-transparent text-cyan-500 rounded-md px-2 py-1">
                        Login
                      </button>
                    </Link>
                    <button className="bg-cyan-500 text-white rounded-md px-2 py-1" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
