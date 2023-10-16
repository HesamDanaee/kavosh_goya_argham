"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import Button from "./shared/Button";

interface IFormSubmit {
  name: string;
  email: string;
  number: string;
  company?: string;
  description?: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormSubmit>();

  const onSubmit: SubmitHandler<IFormSubmit> = (data) => console.log(data);

  return (
    <section className="w-[600px] h-[600px] max-md:w-[90%] max-md:h-auto  px-12 py-8 flex flex-col justify-evenly bg-white rounded-md shadow-2xl lg:-translate-y-28 lg:translate-x-6 z-[100]">
      <h2 className="text-black text-2xl font-kalame font-semibold text-end">
        فرم درخواست مشاوره
      </h2>
      <form className="w-full h-auto flex flex-col justify-evenly items-center">
        <div className="w-full flex max-md:flex-col justify-between items-center">
          {/* Email */}
          <div className="basis-1 max-md:w-full flex flex-col justify-between items-end">
            <label
              htmlFor="email"
              className="text-md font-kalame font-medium my-4"
            >
              ایمیل
            </label>
            <input
              type="text"
              placeholder={`${
                errors.email ? "فرم ایمیل باید پر شود" : "johndoe@email.com"
              }`}
              id="email"
              className={`max-md:w-full border-[1px] px-4 py-3 text-md placeholder:text-sm rounded-lg outline-none focus:border-gray-600 transition-[border] duration-100 ease-out ${
                errors.email?.type === "required"
                  ? "border-red-500 placeholder:text-red-500"
                  : "border-gray-300 placeholder:text-gray-500"
              }`}
              {...register("email", {
                required: "فرم ایمیل باید پر شود",
                maxLength: 20,
              })}
            />
          </div>
          {/* Name an LastName */}
          <div className="basis-1 max-md:w-full flex flex-col justify-between items-end">
            <label
              htmlFor="name"
              className="text-md font-kalame font-medium my-4"
            >
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              placeholder={`${errors.name ? "نامتان را وارد کنید" : ""}`}
              id="name"
              className={`max-md:w-full border-[1px]  px-4 py-3 text-md placeholder:text-sm rounded-lg outline-none focus:border-gray-600 transition-[border] duration-100 ease-out ${
                errors.name?.type === "required"
                  ? "border-red-500 placeholder:text-red-500"
                  : "border-gray-300 placeholder:text-gray-500"
              }`}
              {...register("name", {
                required: true,
                maxLength: 20,
              })}
            />
          </div>
        </div>
        <div className="w-full flex max-md:flex-col justify-between items-center">
          <div className="basis-1 max-md:w-full flex flex-col justify-between items-end">
            {/* Company Name (optional) */}
            <label
              htmlFor="company"
              className="text-md font-kalame font-medium my-4"
            >
              نام شرکت (اختیاری)
            </label>
            <input
              type="text"
              id="company"
              className="max-md:w-full border-[1px] border-gray-300 px-4 py-3 text-md placeholder:text-sm rounded-lg outline-none focus:border-gray-600 transition-[border] duration-100 ease-out"
            />
          </div>
          <div className="basis-1 max-md:w-full flex flex-col justify-between items-end">
            {/* Number */}
            <label
              htmlFor="number"
              className="text-md font-kalame font-medium my-4"
            >
              شماره تماس
            </label>
            <input
              type="text"
              id="number"
              className={`max-md:w-full border-[1px]  px-4 py-3 text-md placeholder:text-sm rounded-lg outline-none focus:border-gray-600 transition-[border] duration-100 ease-out ${
                errors.number?.type === "required"
                  ? "border-red-500 placeholder:text-red-500"
                  : "border-gray-300 placeholder:text-gray-500"
              }`}
              placeholder={`${
                errors.number?.type === "required"
                  ? "شماره تماس تان را وارد کنید"
                  : errors.number?.type === "pattern"
                  ? "فرمت وارد شده نامعتبر است"
                  : ""
              }`}
              {...register("number", {
                min: 18,
                max: 99,
                required: "این فرم باید پر شود",
                pattern: /^\d$/,
              })}
            />
          </div>
        </div>
        {/* Description */}
        <div className="w-full flex flex-col justify-between ">
          <label
            htmlFor="description "
            className="text-md font-kalame font-medium my-4 text-end"
          >
            توضیحات
          </label>
          <textarea
            placeholder={"توضیحات درخواست را وارد"}
            id="description"
            className="border-[1px] text-xs border-gray-300 h-[180px] max-h-[120px] p-2 rounded-lg placeholder:text-xs outline-none focus:border-gray-600 transition-[border] duration-100 ease-out"
            style={{
              direction: "rtl",
            }}
          />
        </div>{" "}
        <Button
          bg="bg-slate-500"
          color="text-white"
          hover="hover:bg-slate-600"
          margin="my-3"
          padding="p-4"
          rounded="rounded-lg"
          size="text-md"
          text="ارسال درخواست"
          rest="w-full"
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </section>
  );
}
