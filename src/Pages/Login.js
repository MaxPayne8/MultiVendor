import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const[loginFormData , setLoginFormData] = useState({"username":'',"password":''})
  const inputHandler =(event)=>{
    setLoginFormData(prevState => ({...prevState , [event.target.name]:event.target.value }))

  }

  

  const submitHandler = () => {
   
    console.log(loginFormData)
  
    const formData = new FormData();
    formData.append('username', loginFormData.username);
    formData.append('password', loginFormData.password);
    console.log("Username:", loginFormData.username);
    console.log("Password:", loginFormData.password);
    console.log(formData)
  };

 
    return (
        <>
         
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign In
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" >
  <div>
    <label htmlFor="username" className= "text-left block text-sm font-medium leading-6 text-gray-900">
      Username
    </label>
    <div className="mt-2">
      <input
        id="username"
        name="username"
        type="text"
        autoComplete="username"
        value={loginFormData.username}
        onChange={inputHandler}
        required
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
      />
    </div>
  </div>

  <div>
    <div className="flex items-center justify-between">
      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
        Password
      </label>
      <div className="text-sm">
        <a href="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
          Forgot password?
        </a>
      </div>
    </div>
    <div className="mt-2">
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        onChange={inputHandler}
        value={loginFormData.password}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"

      />
    </div>
  </div>

  <div>
    <button
      type="button"
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={(e)=>submitHandler(e)}
    >
      Sign in
    </button>
  </div>
</form>


    
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </>
      )
}

export default Login