import people from "@/public/assets/icons/people.svg";
import financial from "@/public/assets/icons/financial.svg";
import insurnace from "@/public/assets/icons/insurance.svg";
import more from "@/public/assets/icons/more.svg";

const serviceCards = [
  {
    title: "خدمات مشاوره ای",
    text: "در این راستا مشتریان گرامی می توانند از مشاوره مالی، مشاروه مالیاتی و مشاره نرم افزاری، گزارش های مدیریتی، تعریف چرخه مالی و... د راستای بهبود سیستم مالی خود استفاده نمایند.",
    icon: people,
    unique: true,
  },
  {
    title: "خدمات مالیاتی",
    text: "تنظیم و ارسال اظهارنامه های مالیات بر ارزش افزوده، تنظیم صورت معاملات خرید و فروش فصلی، تهیه و تنظیم اظهارنامه مالیات بر عملکرد سالانه، کاهش مالیات به صورت قانونی، پیگیری اعتراض مالیاتی در مراحل مختلف، تهیه لوایح مالیاتی...",
    icon: financial,
    unique: false,
  },
  {
    title: "سایر خدمات",
    text: "در این راستا مشتریان گرامی می توانند از مشاوره مالی، مشاروه مالیاتی و مشاره نرم افزاری، گزارش های مدیریتی، تعریف چرخه مالی و... د راستای بهبود سیستم مالی خود استفاده نمایند.",
    icon: more,
    unique: false,
  },
  {
    title: "خدمات بیمه و تامین اجمتاعی",
    text: "در این راستا مشتریان گرامی می توانند از مشاوره مالی، مشاروه مالیاتی و مشاره نرم افزاری، گزارش های مدیریتی، تعریف چرخه مالی و... د راستای بهبود سیستم مالی خود استفاده نمایند.",
    icon: insurnace,
    unique: false,
  },
];

export { serviceCards };
