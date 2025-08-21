import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    // Aktualizuj stan gdy język się zmieni
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <button
        onClick={() => changeLanguage("pl")}
        style={{
          border:
            currentLanguage === "pl" ? "2px solid #007bff" : "1px solid #ccc",
          background: "none",
          cursor: "pointer",
          borderRadius: "4px",
          padding: "5px",
        }}
        aria-label="Polski"
      >
        <img
          src="https://flagcdn.com/w40/pl.png"
          alt="Polska flaga"
          width="30"
          height="20"
        />
      </button>
      <button
        onClick={() => changeLanguage("en")}
        style={{
          border:
            currentLanguage === "en" ? "2px solid #007bff" : "1px solid #ccc",
          background: "none",
          cursor: "pointer",
          borderRadius: "4px",
          padding: "5px",
        }}
        aria-label="English"
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="British flag"
          width="30"
          height="20"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
