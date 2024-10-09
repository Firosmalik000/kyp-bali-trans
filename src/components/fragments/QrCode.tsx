import code1 from '../../img/kyp/tour3.jpg';
import code2 from '../../img/kyp/qr.jpg';
import { useLanguage } from '../../hooks/UseLanguage';

const QrCode = () => {
  const { language } = useLanguage(); // Gunakan hook useLanguage untuk mendapatkan bahasa yang sedang digunakan

  const content = {
    title: {
      en: 'Contact Us via WeChat',
      id: 'Hubungi Kami via WeChat',
      zh: '通过微信联系我们',
    },
    description: {
      en: 'For more details or any inquiries, feel free to reach out to us by scanning the QR code below. Stay connected and let’s make your experience smoother.',
      id: 'Untuk detail lebih lanjut atau pertanyaan, silakan hubungi kami dengan memindai kode QR di bawah ini. Tetap terhubung dan buat pengalaman Anda lebih lancar.',
      zh: '如需了解更多详情或有任何疑问，请通过扫描下方二维码联系我们。保持联系，让您的体验更加顺畅。',
    },
    scanMe: {
      en: 'Scan Me',
      id: 'Pindai Saya',
      zh: '扫我',
    },
  };

  return (
    <section className="relative w-full h-auto h-[600px] bg-cover bg-center px-4 sm:px-10 lg:px-[180px] py-12" style={{ backgroundImage: `url(${code1})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8 md:gap-x-[50px] items-center  h-full">
        {/* Gambar QR Code dan Scan Me */}
        <div className="flex flex-col items-center justify-center h-full pt-10">
          <img src={code2} className="w-[180px] sm:w-[220px] md:w-[250px] rounded-xl mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300" alt="QR Code" />
          <p className="text-white text-xl sm:text-2xl font-semibold">{content.scanMe[language as keyof typeof content.scanMe]}</p>
        </div>
        {/* Konten Teks */}
        <div className="text-center md:text-left w-full max-w-[300px] md:max-w-[400px] flex flex-col items-center md:items-start justify-center h-full">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">{content.title[language as keyof typeof content.title]}</h2>
          <p className="text-white text-sm sm:text-lg leading-relaxed">{content.description[language as keyof typeof content.description]}</p>
        </div>
      </div>
    </section>
  );
};

export default QrCode;
