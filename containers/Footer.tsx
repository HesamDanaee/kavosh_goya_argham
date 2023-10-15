import React from "react";
import Image from "next/image";

// Assets
import logo from "@/public/assets/icons/logo-2.svg";
import logo2 from "@/public/assets/icons/logo-footer.svg";
import phone from "@/public/assets/icons/phone.svg";
import phone_gray from "@/public/assets/icons/phone-gray.svg";
import location from "@/public/assets/icons/location.svg";

// constants
import { pagesList, serviceList, logos } from "@/constants/footerData";
import { generateId } from "@/utils/helpers";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="w-full h-[1200px] max-md:h-[1300px]">
      {/* Section 1 */}
      <section className="w-full h-4/6 max-md:h-1/2 bg-gray-900 text-white font-kalame flex justify-center">
        <div className="w-2/3 max-w-[1000px] h-full text-white font-kalame flex flex-col justify-evenly items-center py-4 max-md:text-center">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="w-1/2"
          />

          <h2
            className="text-2xl font-kalame"
            style={{
              direction: "rtl",
            }}
          >
            شرکت حسابداری کاوش گویا ارقام نهایت اعتماد و اطمینان
          </h2>

          <h1
            className="text-2xl font-[900] font-kalame"
            style={{
              direction: "rtl",
            }}
          >
            با ما یک آرامش حساب ای را تجربه کنید!
          </h1>

          <div className="w-full flex max-md:flex-col-reverse justify-between items-center">
            <h3 className="text-lg">
              <Link
                href="tel:09127362770"
                className="hover:border-b-[1px] transition"
              >
                09127362770
              </Link>
            </h3>

            <div className="flex items-center">
              <h3
                className="text-lg mx-4 max-md:my-4"
                style={{
                  direction: "rtl",
                }}
              >
                تماس سریع :
              </h3>
              <Image
                src={phone}
                width={30}
                height={30}
                alt="phone logo"
                className="w-[50px] h-auto"
              />
            </div>
          </div>
          <div className="w-full flex max-md:flex-col-reverse justify-between items-center">
            <h3 className="text-lg max-md:my-4">
              تهران - خیابان ولیعصر - بالاتر از بهشتی - بالاتر از رستوران نایب -
              برج سرو ساعی - طبقه یازدهم - واحد 1106
            </h3>

            <div className="flex items-center">
              <h3
                className="text-lg mx-4 max-md:my-4"
                style={{
                  direction: "rtl",
                }}
              >
                ادرس دفتر :
              </h3>
              <Image
                src={location}
                width={30}
                height={30}
                alt="phone logo"
                className="w-[50px] h-auto"
              />
            </div>
          </div>
          <div className="w-full flex max-md:flex-col-reverse justify-between items-center">
            <h3 className="text-lg">
              <span className="mr-4">
                <Link
                  href="tel:02188729845"
                  className="hover:border-b-[1px] transition"
                >
                  021- 88 72 98 45
                </Link>
              </span>{" "}
              <span>
                <Link
                  href="tel:02188552948"
                  className="hover:border-b-[1px] transition"
                >
                  021- 88 55 29 48
                </Link>
              </span>
            </h3>

            <div className="flex items-center">
              <h3
                className="text-lg mx-3"
                style={{
                  direction: "rtl",
                }}
              >
                سایر شماره تماس ها :
              </h3>
              <Image
                src={phone_gray}
                width={30}
                height={30}
                alt="phone logo"
                className="w-[50px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="w-full h-1/3 max-md:h-1/2 bg-white px-16 flex flex-col justify-center items-center">
        <div className="w-3/4 max-lg:w-full max-md:flex-col max-md:w-full max-w-[1000px] h-full flex flex-row-reverse justify-between max-md:justify-around items-center font-kalame">
          <div
            style={{ direction: "rtl" }}
            className="text-lg w-1/3 max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:text-center"
          >
            <Image
              src={logo2}
              width={100}
              height={100}
              alt="logo"
              className="w-[200px] h-auto"
            />
            <h3 className="my-4 text-sm">
              شرکت کاوش گویا ارقام با بیش از یک دهه فعالیت و با هدف ایجاد یک
              شرکت حسابداری و مالیاتی جهت ارائه کلیه خدمات مالی از جمله انجام
              امور حسابداری به صورت تمام وقت
            </h3>

            <ul className="w-full max-w-[200px] flex flex-row justify-between items-center">
              {logos.map((src) => (
                <Image
                  key={generateId()}
                  className=" text-gray-600 hover:cursor-pointer"
                  src={src}
                  width={30}
                  height={30}
                  alt="logo"
                />
              ))}
            </ul>
          </div>
          <div className="w-1/2 max-md:w-full flex justify-between items-center">
            {/* Services */}
            <div style={{ direction: "rtl" }} className="text-lg">
              <h3 className="text-md font-bold font-kalame">خدمات</h3>
              <ul className="list-none flex flex-col justify-evenly">
                {serviceList.map((item) => (
                  <li key={generateId()} className=" text-gray-600 font-kalame">
                    <Link href="#" className="hover:border-b-[1px] transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Pages */}
            <div style={{ direction: "rtl" }} className="text-lg">
              <h3 className="text-md font-bold font-kalame">صفحات</h3>
              <ul className="list-none flex flex-col justify-evenly">
                {pagesList.map((item) => (
                  <li key={generateId()} className=" text-gray-600 font-kalame">
                    <Link href="#" className="hover:border-b-[1px] transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full py-8 border-t-[1px] border-gray-200">
          <h4
            className="text-sm font-kalame text-gray-500 text-center tracking-wider"
            style={{
              direction: "rtl",
            }}
          >
            کلیه حقوق این وبسایت مطلق به سایت کاوش گویا ارقام است.
          </h4>
        </div>
      </section>
    </footer>
  );
}
