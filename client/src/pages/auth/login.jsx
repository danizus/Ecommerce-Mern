import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const initialState = {
    password: "",
    email: "",
  };

  function onSubmit() {

  }

  const [formData, setFormData] = useState(initialState);
  return (
    <div className="flex flex-col justify-center h-full mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign In To Your Account
        </h1>
        <p>
          Don't have an account?
          <Link
            className="font-medium text-primary hover:underline ml-1"
            to={"/auth/register"}
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formData={formData}
        setFormData={setFormData}
        buttonText={"Sign In"}
        formControls={loginFormControls}
        onSubmit={onSubmit}
      />
    </div>
  );
}
