import Link from "next/link";


export const metadata = {
  title : "Login",
}



export default function Login() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      for="email"
                      className="absolute left-2 peer-focus:left-0 -top-4.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-1 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600  mt-3"
                      placeholder="Password"
                    />
                    <label
                      for="password"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
