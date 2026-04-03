import { useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
