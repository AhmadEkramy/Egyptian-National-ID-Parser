import { useState } from "react";
import { Lang, t } from "@/lib/translations";
import { validateNationalId } from "@/lib/parseNationalId";
import { Search } from "lucide-react";

interface IdInputProps {
  lang: Lang;
  onParse: (id: string) => void;
}

const IdInput = ({ lang, onParse }: IdInputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateNationalId(value);
    if (!result.valid && result.error) {
      setError(result.error[lang]);
      return;
    }
    setError("");
    onParse(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 14);
    setValue(v);
    if (error) setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto px-4 animate-fade-up-delay-2"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={handleChange}
            placeholder={t("inputPlaceholder", lang)}
            className="glow-input w-full text-base sm:text-lg tracking-wider font-mono pr-14"
            maxLength={14}
            dir="ltr"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-mono">
            {value.length}/14
          </span>
        </div>
        <button type="submit" className="glow-button flex items-center justify-center gap-2 text-base">
          <Search className="w-4 h-4" />
          {t("parse", lang)}
        </button>
      </div>
      {error && (
        <p className="text-destructive text-sm mt-2 animate-fade-up">{error}</p>
      )}
    </form>
  );
};

export default IdInput;
