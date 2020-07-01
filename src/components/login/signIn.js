import React, { useReducer } from "react"
import { initialState, reducer } from "../../reducers"

import Link from "../link"
import FacebookButton from "./facebookButton"
import GoogleButton from "./googleButton"

const SignIn = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="max-w-md m-auto text-center bg-white shadow-md">
      <div className="px-16 py-4 border-b border-gray-400">
        <p className="text-2xl font-heading mb-0">Log in to Drop</p>
      </div>
      {/* <p>
        Sign up and get $10 off your first Drop Studio purchase. Check your
        inbox to redeem.
      </p> */}
      <div className="px-16 pt-4 pb-2">
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
            Log In
          </button>
        </form>
        <p className="text-sm text-black uppercase font-bold max-w-xs mx-auto">
          I forgot my password
        </p>
      </div>

      <div className="px-16 py-6 border-t border-gray-400">
        <p className="mb-0 text-gray-600">
          Not a member yet?{" "}
          <button
            className="inline-block underline hover:no-underline focus:no-underline text-black"
            onClick={() => dispatch({ modal: "signup" })}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignIn
