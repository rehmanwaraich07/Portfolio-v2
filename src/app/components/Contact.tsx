"use client";

import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { name, email, subject, message } = formData;
    window.location.href = `mailto:rehmanwaraich107@gmail?subject=${subject}&body=Hi, my name is ${name}, ${message} (${email})`;
    setIsSubmitted(true);
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-36">
        <h4 className="text-center text-3xl lg:text-4xl font-medium lg:font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+923447191782</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">reach solutions, BWP, PK</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">rehmanwaraich107@gmail.com</p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-[#F7AB0A] text-2xl mt-4">
            Thank you for your message! We'll get back to you soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject", { required: true })}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-2xl"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
