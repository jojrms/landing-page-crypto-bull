import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const languageContext = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={languageContext}>
      {children}
    </LanguageContext.Provider>
  );
};
