import React, { createContext, useState, ReactNode, useEffect } from 'react';

type LanguageType = 'en' | 'zh' | 'id';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(() => {
    // Cek apakah bahasa tersimpan di localStorage, jika tidak gunakan 'en' sebagai default
    const storedLanguage = localStorage.getItem('language') as LanguageType;
    return storedLanguage === 'en' || storedLanguage === 'zh' || storedLanguage === 'id' ? storedLanguage : 'en';
  });

  useEffect(() => {
    // Menyimpan pilihan bahasa di localStorage
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
