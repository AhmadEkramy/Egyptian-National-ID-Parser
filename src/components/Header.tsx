import { Lang, t } from "@/lib/translations";
import eagleImg from "@/assets/eagle.png";
import { Moon, Sun, Languages } from "lucide-react";

interface HeaderProps {
  lang: Lang;
  dark: boolean;
  onToggleDark: () => void;
  onToggleLang: () => void;
}

const Header = ({ lang, dark, onToggleDark, onToggleLang }: HeaderProps) => {
  return (
    <header className="relative flex flex-col items-center pt-20 pb-4 px-4 animate-fade-up">
      {/* Controls */}
      <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
        <div /> {/* Spacer for symmetry if needed, or move one button here */}
        <div className="flex gap-2">
          <button
            onClick={onToggleDark}
            className="glass-card p-2.5 transition-all duration-300 hover:border-gold/40 group"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Sun className="w-5 h-5 text-gold group-hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-gold group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>
          <button
            onClick={onToggleLang}
            className="glass-card px-3 py-2 text-sm font-semibold text-gold transition-all duration-300 hover:border-gold/40 flex items-center gap-1.5"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4" />
            {lang === "en" ? "عربي" : "EN"}
          </button>
        </div>
      </div>

      {/* Eagle */}
      <div className="w-32 h-32 sm:w-48 sm:h-48 mb-4 animate-fade-up">
        <img
          src={eagleImg}
          alt="Egyptian Eagle Emblem"
          className="w-full h-full object-contain drop-shadow-[0_0_30px_hsl(38,70%,50%,0.3)] premium-float"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient-text text-center animate-fade-up-delay-1">
        {t("title", lang)}
      </h1>
      <p className="text-muted-foreground text-sm sm:text-base mt-2 animate-fade-up-delay-2">
        {t("subtitle", lang)}
      </p>
    </header>
  );
};

export default Header;
