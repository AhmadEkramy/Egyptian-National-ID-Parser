import { useState, useEffect } from "react";
import Header from "@/components/Header";
import IdInput from "@/components/IdInput";
import ResultCards from "@/components/ResultCards";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { parseNationalId, ParsedId } from "@/lib/parseNationalId";
import { Lang } from "@/lib/translations";

const Index = () => {
  const [lang, setLang] = useState<Lang>("ar");
  const [dark, setDark] = useState(false);
  const [result, setResult] = useState<ParsedId | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleParse = (id: string) => {
    setResult(null);
    // Small delay to re-trigger animations
    requestAnimationFrame(() => setResult(parseNationalId(id)));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-500 overflow-hidden relative">
      <Particles />
      <Header
        lang={lang}
        dark={dark}
        onToggleDark={() => setDark(!dark)}
        onToggleLang={() => setLang(lang === "en" ? "ar" : "en")}
      />

      <main className="flex-1 flex flex-col items-center py-8 gap-4">
        <IdInput lang={lang} onParse={handleParse} />
        {result && <ResultCards data={result} lang={lang} key={result.birthDate} />}
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default Index;
