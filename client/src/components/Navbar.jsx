import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return null;

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="" />
        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <Link to="/applications" className="text-gray-700 hover:text-blue-600">
              Applied Jobs
            </Link>
            <p className="text-gray-600">|</p>
            <p className="text-gray-600">Hi, {user?.firstName || "there"}</p>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex items-center gap-3 max-sm:text-xs">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-600">Recruiter Login</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
