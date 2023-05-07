"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


async function SubmitLogin(data,...params){
  const [router] = params
  const {email,password} = data
  try {
      const response = await axios(process.env.URL_HOST+"/login",{
          withCredentials:true,
          method : "POST",
          headers : {
              "Content-Type" : 'application/json'
          },
          data : {
              email : email,
              password : password,
          }
      }) 
      if(response){
      return router.replace('/')
    }
      
  } catch (error) {
      alert('ada kesalahan saat login. silahkan cek kembali')
  }
  

}

export default function Login() {
  const [input, setInput] = useState({
    email : '',
    password : '',
   });
  const router = useRouter()

  function onChange (e) {
    const target = e.target
    const value = e.currentTarget.value
    const name = target.name
    setInput({
        ...input,
        [name] : value
    })  
  }

  function handleSubmit(e) {
      e.preventDefault();
      SubmitLogin(input,router)

      //Reset Input after submit
      setInput({email : "",password : ""})      
  }


  return (
    <>
    <title>Login</title>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login</h1>
              </div>
              <form method="POST" onSubmit={(e) => handleSubmit(e)} className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={(e) => onChange(e)}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-2 peer-focus:left-0 -top-4.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600  mt-3"
                      placeholder="Password"
                      onChange={(e) => onChange(e)}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-2 peer-focus:left-0 -top-4.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      password
                    </label>
                  </div>
                  <div className="relative text-right">
                    <Link href={"/signup"}>
                      <button className="bg-transparent text-cyan-500 rounded-md px-2 py-1">
                        Signup
                      </button>
                    </Link>
                    <button className="bg-cyan-500 text-white rounded-md px-2 py-1">
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
