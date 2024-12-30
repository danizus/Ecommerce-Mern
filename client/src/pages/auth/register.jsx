import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const initialState = {
    username: "",
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
          Create New Account
        </h1>
        <p>
          Already Registered?{" "}
          <Link
            className="font-medium text-primary hover:underline ml-1"
            to={"/auth/login"}
          >
            login
          </Link>
        </p>
      </div>
      <CommonForm
        formData={formData}
        setFormData={setFormData}
        buttonText={"Create An Account"}
        formControls={registerFormControls}
        onSubmit={onSubmit}
      />
    </div>
  );
}
