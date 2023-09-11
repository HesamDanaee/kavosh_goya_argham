import { v4 as uuid } from "uuid";

export function generateId() {
  return uuid();
}

export function toPersianNumber(text: string) {
  const nums: { [key: string]: string } = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  const digits = text.split("");
  const keys = Object.keys(nums);
  let persianNum = "";

  for (let digit of digits) {
    for (let key of keys) {
      digit === key && (persianNum += nums[key]);
    }
  }
  return persianNum;
}
