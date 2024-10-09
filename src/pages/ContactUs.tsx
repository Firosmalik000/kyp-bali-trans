import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';
// import QrCode from '../components/fragments/QrCode';
import { IoLogoWechat } from 'react-icons/io5';
import Qr from '../img/kyp/qr.jpg';
import { useState } from 'react';
import { IoScanSharp } from 'react-icons/io5';

const ContactUs = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka dan menutup modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const content = {
    en: {
      title: 'Contact Us',
      description: 'Please click the button below to get in touch with our admin directly',
      whatsapp: 'Contact via WhatsApp',
    },
    zh: {
      title: '联系我们',
      description: '请点击下面的按钮直接与我们的管理员联系',
      whatsapp: '通过 WhatsApp 联系',
    },
    id: {
      title: 'Kontak Kami',
      description: 'Silakan klik tombol di bawah ini untuk menghubungi admin kami secara langsung',
      whatsapp: 'Kontak melalui WhatsApp',
    },
    jp: {
      title: 'お問い合わせ',
      description: '以下のボタンをクリックして、管理者に直接連絡してください',
      whatsapp: 'WhatsAppで連絡する',
    },
    ko: {
      title: '문의하기',
      description: '아래 버튼을 클릭하여 관리자에게 직접 연락해 주세요',
      whatsapp: 'WhatsApp으로 연락하기',
    },
  };

  return (
    <>
      <div className="pt-[200px] pb-20 flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-200">
        {/* Contact Info Section */}
        <div className="flex flex-col w-full max-w-md px-6 gap-4">
          <p className="font-playfair text-4xl font-semibold text-center md:text-end">{content[language].title}</p>
          <p className="text-gray-700 text-center md:text-end">{content[language].description}</p>
          <a href="https://wa.me/+6283832050948" target="_blank" rel="noopener noreferrer">
            <div className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold h-12 flex items-center justify-center rounded-lg shadow-md transition-all">{content[language].whatsapp}</div>
          </a>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col gap-4 w-full max-w-md px-6 ">
          <div className="flex items-center text-lg font-medium justify-center md:justify-start">
            <FaPhoneAlt className="text-gray-700 mr-2 text-2xl" />
            <p className="text-gray-700">+62-823-4033-2580</p>
          </div>
          <div className="flex items-center text-lg font-medium justify-center md:justify-start">
            <FaEnvelope className="text-gray-700 mr-2 text-2xl" />
            <p className="text-gray-700">kypbalitrans@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-lg font-medium justify-center md:justify-start">
              <FaInstagram className="text-gray-700 mr-2 text-2xl" />
              <p className="text-gray-700">@kyp.bali_trans</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-lg font-medium justify-center md:justify-start">
              <IoLogoWechat className="text-gray-700 mr-2 text-2xl" />
              <div className="group">
                <button onClick={openModal} className="w-[250px] border rounded-xl bg-gray-100 hover:bg-gray-600 group-hover:text-white font-semibold h-10 flex items-center justify-center shadow-md transition-all">
                  <IoScanSharp className="text-gray-700 mr-2 group-hover:text-white" /> QR Barcode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* qr section */}
      {/* <QrCode /> */}
      {/* Map Section */}
      <div className="mt-10 px-4 md:px-20 lg:px-40 xl:px-60 rounded-xl mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4142301991196!2d115.02318095000001!3d-8.1609538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd19b40a35dbf07%3A0x7500ee0f7e30527c!2sLovina%20Beach!5e0!3m2!1sen!2sid!4v1728152939307!5m2!1sen!2sid"
          width="100%"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      {/* Map Section */}
      {/* {isModalOpen && ( */}
      <div className={`fixed inset-0 bg-black/60 z-[10000] flex justify-center items-center transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0" onClick={closeModal}></div>
        <div className={`relative bg-white p-4 rounded-lg z-[10001] transform transition-transform duration-300 ease-in-out ${isModalOpen ? 'scale-100' : 'scale-90'}`}>
          <img src={Qr} alt="QR Code" className="w-[300px] h-[300px]" />
          <p className="text-center font-semibold font-sans text-2xl">Scan Me</p>
        </div>
      </div>

      {/* )} */}
    </>
  );
};

export default ContactUs;
