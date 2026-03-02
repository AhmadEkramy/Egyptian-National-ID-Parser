const GOVERNORATE_MAP: Record<string, { en: string; ar: string }> = {
  "01": { en: "Cairo", ar: "القاهرة" },
  "02": { en: "Alexandria", ar: "الإسكندرية" },
  "03": { en: "Port Said", ar: "بورسعيد" },
  "04": { en: "Suez", ar: "السويس" },
  "11": { en: "Damietta", ar: "دمياط" },
  "12": { en: "Dakahlia", ar: "الدقهلية" },
  "13": { en: "Sharqia", ar: "الشرقية" },
  "14": { en: "Qalyubia", ar: "القليوبية" },
  "15": { en: "Kafr El Sheikh", ar: "كفر الشيخ" },
  "16": { en: "Gharbia", ar: "الغربية" },
  "17": { en: "Monufia", ar: "المنوفية" },
  "18": { en: "Beheira", ar: "البحيرة" },
  "19": { en: "Ismailia", ar: "الإسماعيلية" },
  "21": { en: "Giza", ar: "الجيزة" },
  "22": { en: "Beni Suef", ar: "بني سويف" },
  "23": { en: "Fayoum", ar: "الفيوم" },
  "24": { en: "Minya", ar: "المنيا" },
  "25": { en: "Assiut", ar: "أسيوط" },
  "26": { en: "Sohag", ar: "سوهاج" },
  "27": { en: "Qena", ar: "قنا" },
  "28": { en: "Aswan", ar: "أسوان" },
  "29": { en: "Luxor", ar: "الأقصر" },
  "31": { en: "Red Sea", ar: "البحر الأحمر" },
  "32": { en: "New Valley", ar: "الوادي الجديد" },
  "33": { en: "Matruh", ar: "مطروح" },
  "34": { en: "North Sinai", ar: "شمال سيناء" },
  "35": { en: "South Sinai", ar: "جنوب سيناء" },
  "88": { en: "Born outside Egypt", ar: "مولود خارج مصر" },
};

export interface ParsedId {
  birthDate: string;
  age: number;
  gender: "male" | "female";
  governorate: { en: string; ar: string };
  isAdult: boolean;
}

export interface ValidationResult {
  valid: boolean;
  error?: { en: string; ar: string };
}

export function validateNationalId(id: string): ValidationResult {
  if (!id) return { valid: false, error: { en: "Please enter a National ID", ar: "يرجى إدخال الرقم القومي" } };
  if (!/^\d+$/.test(id)) return { valid: false, error: { en: "ID must contain digits only", ar: "يجب أن يحتوي الرقم القومي على أرقام فقط" } };
  if (id.length !== 14) return { valid: false, error: { en: "ID must be exactly 14 digits", ar: "يجب أن يكون الرقم القومي 14 رقمًا" } };

  const century = id[0];
  if (century !== "2" && century !== "3") return { valid: false, error: { en: "Invalid century digit", ar: "رقم القرن غير صالح" } };

  const month = parseInt(id.substring(3, 5));
  if (month < 1 || month > 12) return { valid: false, error: { en: "Invalid month in ID", ar: "الشهر غير صالح" } };

  const day = parseInt(id.substring(5, 7));
  if (day < 1 || day > 31) return { valid: false, error: { en: "Invalid day in ID", ar: "اليوم غير صالح" } };

  const govCode = id.substring(7, 9);
  if (!GOVERNORATE_MAP[govCode]) return { valid: false, error: { en: "Invalid governorate code", ar: "كود المحافظة غير صالح" } };

  return { valid: true };
}

export function parseNationalId(id: string): ParsedId {
  const centuryDigit = id[0];
  const centuryBase = centuryDigit === "2" ? 1900 : 2000;
  const year = centuryBase + parseInt(id.substring(1, 3));
  const month = parseInt(id.substring(3, 5));
  const day = parseInt(id.substring(5, 7));

  const birthDate = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;

  const today = new Date();
  const birth = new Date(year, month - 1, day);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--;

  const govCode = id.substring(7, 9);
  const governorate = GOVERNORATE_MAP[govCode];

  const genderDigit = parseInt(id[12]);
  const gender: "male" | "female" = genderDigit % 2 !== 0 ? "male" : "female";

  return { birthDate, age, gender, governorate, isAdult: age >= 18 };
}
