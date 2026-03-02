export type Lang = "en" | "ar";

const translations = {
  title: { en: "Egyptian National ID Parser", ar: "محلل الرقم القومي المصري" },
  subtitle: { en: "Enter your 14-digit National ID to decode your information", ar: "أدخل الرقم القومي المكون من 14 رقمًا لمعرفة بياناتك" },
  inputPlaceholder: { en: "Enter 14-digit National ID", ar: "أدخل الرقم القومي المكون من 14 رقمًا" },
  parse: { en: "Parse ID", ar: "تحليل الرقم" },
  birthDate: { en: "Birth Date", ar: "تاريخ الميلاد" },
  age: { en: "Age", ar: "العمر" },
  years: { en: "years", ar: "سنة" },
  gender: { en: "Gender", ar: "الجنس" },
  male: { en: "Male", ar: "ذكر" },
  female: { en: "Female", ar: "أنثى" },
  governorate: { en: "Governorate", ar: "المحافظة" },
  adultStatus: { en: "Adult Status", ar: "حالة البلوغ" },
  adult: { en: "Adult (18+)", ar: "بالغ (+18)" },
  minor: { en: "Minor (Under 18)", ar: "قاصر (أقل من 18)" },
  footer: { en: "Computer Engineer – Ahmed Ekramy", ar: "مهندس كمبيوتر – أحمد إكرامي" },
  lightMode: { en: "Light", ar: "فاتح" },
  darkMode: { en: "Dark", ar: "داكن" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}
