import React, { createContext, useState } from 'react';
import enTranslation from './components/languages/en.json'
import ptTranslation from './components/languages/pt.json'

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    en: enTranslation,
    pt: ptTranslation,
  };

  const languageContext = {
    language,
    translations: translations[language],
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContext}>
      {children}
    </LanguageContext.Provider>
  );
};
