import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles/LanguageSwitcher.css"; // Dodaj import pliku CSS

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
    <div className="language-switcher-container">
      <button
        className={`btn language-btn ${
          currentLanguage === "pl" ? "active" : ""
        }`}
        onClick={() => changeLanguage("pl")}
        aria-label="Polski"
      >
        <img
          src="https://flagcdn.com/w40/pl.png"
          alt="Polska flaga"
          className="language-flag"
        />
      </button>
      <button
        className={`btn language-btn ${
          currentLanguage === "en" ? "active" : ""
        }`}
        onClick={() => changeLanguage("en")}
        aria-label="English"
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="British flag"
          className="language-flag"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
