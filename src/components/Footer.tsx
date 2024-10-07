import { useLanguage } from '../hooks/UseLanguage';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: '© 2024 All rights reserved.',
    zh: '© 2024 保留所有权利。',
    id: '© 2024 Hak cipta dilindungi.',
  };

  return (
    <footer className="border-t-2 py-6 px-[100px] bg-gray-700 text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">KYP Bali Trans {content[language]}</p>
      </div>
    </footer>
  );
};

export default Footer;
