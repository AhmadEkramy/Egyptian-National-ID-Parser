import { ParsedId } from "@/lib/parseNationalId";
import { Lang, t } from "@/lib/translations";
import { Calendar, User, MapPin, ShieldCheck, Cake } from "lucide-react";

interface ResultCardsProps {
  data: ParsedId;
  lang: Lang;
}

const cards = (data: ParsedId, lang: Lang) => [
  {
    icon: Calendar,
    label: t("birthDate", lang),
    value: data.birthDate,
    delay: "animate-fade-up",
  },
  {
    icon: Cake,
    label: t("age", lang),
    value: `${data.age} ${t("years", lang)}`,
    delay: "animate-fade-up-delay-1",
  },
  {
    icon: User,
    label: t("gender", lang),
    value: data.gender === "male" ? t("male", lang) : t("female", lang),
    delay: "animate-fade-up-delay-2",
  },
  {
    icon: MapPin,
    label: t("governorate", lang),
    value: data.governorate[lang],
    delay: "animate-fade-up-delay-3",
  },
  {
    icon: ShieldCheck,
    label: t("adultStatus", lang),
    value: data.isAdult ? t("adult", lang) : t("minor", lang),
    delay: "animate-fade-up-delay-4",
  },
];

const ResultCards = ({ data, lang }: ResultCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl mx-auto px-4 mt-8">
      {cards(data, lang).map((card) => (
        <div key={card.label} className={`result-card flex items-start gap-4 ${card.delay}`}>
          <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
            <card.icon className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              {card.label}
            </p>
            <p className="text-lg font-bold text-foreground mt-0.5">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultCards;
