"use client"; // This is necessary if you're working with Next.js in app directory.

import { useState } from "react";

const Button = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="relative z-[40]">
        <div
          onClick={handleOpenModal}
          className="button bg-[#13f97b] mt-[2rem] h-20 w-[388px] rounded-lg p-4 cursor-pointer flex items-center justify-between text-[16px] font-[600] transition-all duration-500 ease-in-out shadow-[0_24px_32px_-20px_rgba(19,249,123,0)] hover:scale-105 relative overflow-hidden z-50"
        >
          <div className="btn-text w-full text-center z-10 ">
            Jetzt kostenlosen Zugang sichern
          </div>

          <div className="btn-arrow-icon z-10">
            <img
              src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3e88_arrow-right%201.svg"
              alt="Arrow"
            />
          </div>

          <div className="interaction absolute top-0 left-0 h-full w-full animate-interaction pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webp"
              alt="interaction"
              loading="lazy"
              sizes="(max-width: 100px), 200.998046875px"
              srcSet="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%25203404-p-500.png 500w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webp 654w"
            />
          </div>
        </div>

        <div className="flex items-center justify-center  mt-[2rem] z-20 sm:mt-[1rem]">
          <img
            src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/66d71361e6381ef5a1d07c03_avatars%202k.png"
            alt="Avatar"
            width={114}
            height={30.19}
          />
          <div className="text-people ml-4 text-black text-[12px] sm:text-[10px]">
            Beretis <strong>2.145+</strong> Mal bestellt
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md">
            <div className="bg-white absolute rounded-lg p-8 w-full max-w-md top-[7rem]">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-black font-bold"
                onClick={handleCloseModal}
              >
                X
              </button>

              {/* Modal Content */}
              <h1 className="form text-[28px] font-bold mb-6 leading-[1.5] ">
                Nur noch ein Schritt...
              </h1>
              <form>
                <input
                  className="block w-full mb-4 rounded-[10px] text-[14px] bg-[#edf1f6] p-[18px]"
                  type="text"
                  placeholder="Vorname"
                />
                <input
                  className="block w-full mb-4 rounded-[10px] text-[14px] bg-[#edf1f6] p-[18px]"
                  type="text"
                  placeholder="Nachname"
                />
                <input
                  className="block w-full mb-4 rounded-[10px] text-[14px] bg-[#edf1f6] p-[18px]"
                  type="email"
                  placeholder="E-Mail Adresse"
                />
                <input
                  className="block w-full mb-4 rounded-[10px] text-[14px] bg-[#edf1f6] p-[18px]"
                  type="tel"
                  placeholder="123 456 7890"
                />
                <div className="button bg-[#13f97b] mt-[2rem] h-20 w-[388px] rounded-lg p-4 cursor-pointer flex items-center justify-between text-[16px] font-[600] transition-all duration-500 ease-in-out shadow-[0_24px_32px_-20px_rgba(19,249,123,0)] hover:scale-105 relative overflow-hidden">
                  <div className="btn-text w-full text-center z-10 ">
                    Jetzt Zugang sichern
                  </div>

                  <div className="btn-arrow-icon z-10">
                    <img
                      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3e88_arrow-right%201.svg"
                      alt="Arrow"
                    />
                  </div>

                  <div className="interaction absolute top-0 left-0 h-full w-full animate-interaction pointer-events-none">
                    <img
                      className="h-full w-full object-cover"
                      src="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webp"
                      alt="interaction"
                      loading="lazy"
                      sizes="(max-width: 100px), 200.998046875px"
                      srcSet="https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%25203404-p-500.png 500w, https://cdn.prod.website-files.com/6601dc8887b1e34f1fff3e59/6601dc8887b1e34f1fff3f53_Rectangle%203404.webp 654w"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-[#728291] text-[14px]">
                    Ich akzeptiere die Datenschutzbestimmungen
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes moveInteraction {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-interaction {
          animation: moveInteraction 3s linear infinite;
        }
        .backdrop-blur-md {
          backdrop-filter: blur(10px);
          background-image: linear-gradient(#f6f8fb80, #f6f8fbe6);
        }
      `}</style>
    </>
  );
};

export default Button;
