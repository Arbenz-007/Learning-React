import React, { useEffect, useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setISSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate= useNavigate();

  const dispatch= useDispatch();

  const toggleSignInForm = () => {
    setISSignForm(!isSignInForm);
  };
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when a component unmounts
    return () => unsubsribe();
  }, []);

  const handleSubmit = () => {
    const msg = checkValidData(email.current.value, password.current.value);

    setErrorMessage(msg);
    if (msg) return;

    if (!isSignInForm) {
      //sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );

            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      }
    };
  return (
    <div className="mt-20 w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-600">
          {isSignInForm ? "Welcome Back!" : "Welcome"}
        </h2>
        <p className="text-gray-600">
          {isSignInForm
            ? "Sign in to continue to Foodie Buddy"
            : "Sign up to Foddie Buddy"}
        </p>
      </div>

      <form className="p-4 mx-auto" onSubmit={(e)=>e.preventDefault()}>
        <div className=" space-y-4">
          {!isSignInForm && (
            <div>
              <h2 className="text-lg font-bold">Name</h2>
              <input
                ref={name}
                className="p-4 w-full bg-gray-200 rounded-lg"
                type="text"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className=" space-y-2">
            <h2 className="text-lg font-bold">Email</h2>
            <input
              ref={email}
              type="email"
              placeholder="Enter your email"
              // onChange={(e) => setEmail(e.target.value)}
              className="p-4 border-red-500 w-full bg-gray-200 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <div className="relative">
              <h2 className="text-lg font-bold">Password</h2>
              <input
                ref={password}
                type="password"
                placeholder="Enter your password"
                // onChange={(e) => setPassword(e.target.value)}
                className="border-red-500 p-4 w-full bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          <p className=" text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <button
          onClick={handleSubmit}
            type="submit"
            className="p-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600">
          {isSignInForm
            ? "Don't have an account?"
            : "Already  have a account? "}
          <a
            href="#"
            onClick={toggleSignInForm}
            className="text-orange-600 hover:underline"
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
