import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
    </form>
  );
};

export default RegisterHook;
