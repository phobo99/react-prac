import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];
const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    reset,
    watch,
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
          type="text"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your email address"
          id="email"
          type="email"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your email address</p>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your password"
          id="password"
          type="password"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your password</p>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        ></CheckboxHook>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          dropdownLabel="Select your job"
        ></DropdownHook>
        {errors.job && (
          <p className="text-sm text-red-500">{errors.job.message}</p>
        )}
      </div>
      <button className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
