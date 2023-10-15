import FeaturedSection from "@/components/shared/FeaturedSection";
import VisualBanner from "@/components/shared/VisualBanner";
import herophoto from "@/public/assets/photos/herosectionFrame.svg";
import heroCover from "@/public/assets/icons/herophotoframe.svg";
import chevron from "@/public/assets/icons/Curl-Chevron.svg";
import payment from "@/public/assets/icons/payment-component.svg";
import acountantcard from "@/public/assets/icons/acountantcard.svg";

export default function HeroSection() {
  const title = (
    <>
      <span className="font-bold"> انجام کلیه </span>
      امور مالی، <span className="font-bold"> حسابداری و </span>
      مشاوره مالیاتی
    </>
  );
  return (
    <article
      id="hero-section"
      className="w-full max-w-[1200px] h-auto max-lg:h-[800px] max-lg:flex-col max-lg:justify-evenly flex justify-between items-center px-10 my-10 max-md:px-2"
    >
      <VisualBanner src={herophoto} hero />
      <FeaturedSection
        title={title}
        text="      شرکت کاوش گویا ارقام با بیش از یک دهه فعالیت و با هدف ایجاد یک شرکت
        حسابداری و مالیاتی جهت ارائه کلیه خدمات مالی از جمله انجام امور حسابداری
        به صورت تمام وقت"
        buttonText="ارتباط جهت مشاوره"
        hero
      />
    </article>
  );
}
