import React, { useReducer } from "react"
import { initialState, reducer } from "../../reducers"

import Link from "../link"
import FacebookButton from "./facebookButton"
import GoogleButton from "./googleButton"

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="max-w-md m-auto text-center px-16 py-6 bg-white shadow-md">
      <p className="text-3xl font-heading font-bold uppercase">Get $10 off</p>
      <p>
        Sign up and get $10 off your first Drop Studio purchase. Check your
        inbox to redeem.
      </p>
      <div className="flex flex-col">
        <FacebookButton />
        <GoogleButton />
      </div>
      <p className="flex items-center my-4">
        <i className="flex-auto h-px bg-gray-400" />
        <span className="flex-initial text-sm text-gray-400 uppercase px-4">
          or
        </span>
        <i className="flex-auto h-px bg-gray-400" />
      </p>
      <form className="flex flex-col mb-2">
        <label className="text-left">
          <p className="text-gray-500 mb-1">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-2 py-1 mb-4 border border-gray-600 rounded text-lg font-light italic"
          />
        </label>
        <label className="text-left">
          <p className="text-gray-500 mb-1">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-2 py-1 mb-4 border border-gray-600 rounded text-lg font-light italic"
          />
        </label>
        <button
          type="submit"
          className="font-heading text-center bg-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 text-white hover:text-black focus:text-black mt-2 mb-4 py-3 px-6"
        >
          Continue
        </button>
      </form>
      <p className="text-xs max-w-xs mx-auto">
        By continuing, you agree to Drop's
        <br />
        <Link
          to="/terms"
          className="inline-block text-gray-500 hover:text-gray-900 focus:text-gray-900 font-bold"
        >
          Terms of Service
        </Link>
        ,{" "}
        <Link
          to="/privacy"
          className="inline-block text-gray-500 hover:text-gray-900 focus:text-gray-900 font-bold"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <p className="mb-0">
        Already a member?{" "}
        <button
          className="inline-block underline hover:no-underline focus:no-underline"
          onClick={() => dispatch({ modal: "signin" })}
        >
          Log in
        </button>
      </p>
    </div>
  )
}

export default SignUp
