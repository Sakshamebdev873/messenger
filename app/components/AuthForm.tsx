"use client";
import axios from 'axios'
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Inputs/Input";
import Button from "./Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      axios
    }
    if (variant === "LOGIN") {
    }
  };
  const socialAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      {" "}
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg  sm:px-10 ">
        <form className="space-y-6  " onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              type="text"
              label="Name"
              id="name"
              register={register}
              errors={errors}
            />
          )}
          <Input
            type="email"
            label="Email"
            id="email"
            register={register}
            errors={errors}
          />
          <Input
            type="password"
            label="password"
            id="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {" "}
              {variant === "LOGIN" ? "Sign in" : "Register"}{" "}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center ">
              <div className="w-full border-t border-gray-300 ">
                <div className="relative flex justify-center text-sm ">
                  <span className="bg-white px-2 text-gray-500">
                    {" "}
                    or Continue with{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          <AuthSocialButton
            Icon={BsGithub}
            onClick={() => socialAction("github")}
          />
        </div>
        <div className="mt-6 flex gap-2">
          <AuthSocialButton
            Icon={BsGoogle}
            onClick={() => socialAction("github")}
          />
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500 ">
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN"
              ? "New to Messages"
              : "Already have an account ? "}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default AuthForm;
